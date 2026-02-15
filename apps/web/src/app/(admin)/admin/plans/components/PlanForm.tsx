'use client';
import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  Card,
  Divider,
  Group,
  NumberInput,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Plan } from '../../../../../types/planType';
import FeatureCard from './FeatureCard';
import LimitationCard from './LimitationCard';

interface PlanFormProps {
  mode: 'create' | 'edit';
  plan?: Plan;
  close: () => void;
}

const schema = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters'),
  installationFee: yup
    .number()
    .required('Installation fee is required')
    .min(0, 'Installation fee must be positive'),
  pricePerCar: yup
    .number()
    .required('Price per car is required')
    .min(0, 'Price per car must be positive'),
  features: yup
    .array()
    .of(yup.string())
    .min(1, 'At least one feature is required'),
  limitations: yup.array().of(yup.string()),
  status: yup
    .string()
    .oneOf(['draft', 'active', 'inactive'], 'Invalid status')
    .required('Status is required'),
  isPopular: yup.boolean(),
});

const PlanForm = ({ mode, plan, close }: PlanFormProps) => {
  const [showAddFeature, setShowAddFeature] = useState(false);
  const [showAddLimitation, setShowAddLimitation] = useState(false);
  const [newFeature, setNewFeature] = useState('');
  const [newLimitation, setNewLimitation] = useState('');

  const form = useForm({
    initialValues: {
      title: '',
      installationFee: 0,
      pricePerCar: 0,
      features: [] as string[],
      limitations: [] as string[],
      status: 'draft' as 'draft' | 'active' | 'inactive',
      isPopular: false,
    },
    validate: yupResolver(schema),
  });

  // Populate form when editing existing plan
  useEffect(() => {
    if (mode === 'edit' && plan) {
      form.setValues({
        title: plan.title,
        installationFee: parseFloat(plan.installationFee) || 0,
        pricePerCar: parseFloat(plan.pricePerCar) || 0,
        features: plan.features || [],
        limitations: plan.limitations || [],
        status: plan.status || 'draft',
        isPopular: false, // This field doesn't exist in Plan type, keeping as default
      });
    }
  }, [mode, plan]);

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form submitted with values:', values);
    form.reset();
    close();
    if (mode === 'create') {
      notifications.show({
        title: 'Successfull',
        message: 'Plan created successfully!',
        color: 'green',
        autoClose: 3000,
      });
    } else {
      notifications.show({
        title: 'Successfull',
        message: 'Plan updated successfully!',
        color: 'green',
        autoClose: 3000,
      });
    }
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      form.setFieldValue('features', [
        ...form.values.features,
        newFeature.trim(),
      ]);
      setNewFeature('');
      setShowAddFeature(false);
    }
  };

  const handleCancelAddFeature = () => {
    setNewFeature('');
    setShowAddFeature(false);
  };

  const handleEditFeature = (oldFeature: string, newFeature: string) => {
    const updatedFeatures = form.values.features.map(feature =>
      feature === oldFeature ? newFeature : feature
    );
    form.setFieldValue('features', updatedFeatures);
  };

  const handleDeleteFeature = (featureToDelete: string) => {
    const updatedFeatures = form.values.features.filter(
      feature => feature !== featureToDelete
    );
    form.setFieldValue('features', updatedFeatures);
  };

  const handleAddLimitation = () => {
    if (newLimitation.trim()) {
      form.setFieldValue('limitations', [
        ...form.values.limitations,
        newLimitation.trim(),
      ]);
      setNewLimitation('');
      setShowAddLimitation(false);
    }
  };

  const handleCancelAddLimitation = () => {
    setNewLimitation('');
    setShowAddLimitation(false);
  };

  const handleEditLimitation = (
    oldLimitation: string,
    newLimitation: string
  ) => {
    const updatedLimitations = form.values.limitations.map(limitation =>
      limitation === oldLimitation ? newLimitation : limitation
    );
    form.setFieldValue('limitations', updatedLimitations);
  };

  const handleDeleteLimitation = (limitationToDelete: string) => {
    const updatedLimitations = form.values.limitations.filter(
      limitation => limitation !== limitationToDelete
    );
    form.setFieldValue('limitations', updatedLimitations);
  };

  return (
    <Card>
      <Text size="lg" fw={600} mb="md">
        {mode === 'create' ? 'Create Plan' : 'Edit Plan'}
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Title"
            placeholder="Enter Plan Title"
            {...form.getInputProps('title')}
          />

          <Divider label="Pricing Section" labelPosition="left" />

          <NumberInput
            label="One Time Installation Fee"
            placeholder="Enter installation fee"
            min={0}
            {...form.getInputProps('installationFee')}
          />

          <NumberInput
            label="Price per Car per Month"
            placeholder="Enter monthly price per car"
            min={0}
            {...form.getInputProps('pricePerCar')}
          />

          <Divider label="Features" labelPosition="left" />

          {/* Features Section */}
          <Box>
            {form.values.features.length > 0 && (
              <Stack gap="xs" mb="md">
                {form.values.features.map((feature, index) => (
                  <FeatureCard
                    key={`${feature}-${index}`}
                    feature={feature}
                    onEdit={handleEditFeature}
                    onDelete={handleDeleteFeature}
                  />
                ))}
              </Stack>
            )}

            {showAddFeature ? (
              <Card withBorder p="sm" radius="md">
                <Stack gap="xs">
                  <TextInput
                    placeholder="Enter feature description"
                    value={newFeature}
                    onChange={e => setNewFeature(e.target.value)}
                    autoFocus
                  />
                  <Group justify="flex-end">
                    <Button
                      size="xs"
                      variant="outline"
                      onClick={handleCancelAddFeature}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="xs"
                      onClick={handleAddFeature}
                      disabled={!newFeature.trim()}
                    >
                      Save
                    </Button>
                  </Group>
                </Stack>
              </Card>
            ) : (
              <Group justify="flex-end">
                <Button onClick={() => setShowAddFeature(true)}>
                  Add Feature
                </Button>
              </Group>
            )}

            {form.errors.features && (
              <Text size="sm" c="red" mt="xs">
                {form.errors.features}
              </Text>
            )}
          </Box>

          <Divider label="Limitations" labelPosition="left" />

          {/* Limitations Section */}
          <Box>
            {form.values.limitations.length > 0 && (
              <Stack gap="xs" mb="md">
                {form.values.limitations.map((limitation, index) => (
                  <LimitationCard
                    key={`${limitation}-${index}`}
                    limitation={limitation}
                    onEdit={handleEditLimitation}
                    onDelete={handleDeleteLimitation}
                  />
                ))}
              </Stack>
            )}

            {showAddLimitation ? (
              <Card withBorder p="sm" radius="md">
                <Stack gap="xs">
                  <TextInput
                    placeholder="Enter limitation description"
                    value={newLimitation}
                    onChange={e => setNewLimitation(e.target.value)}
                    autoFocus
                  />
                  <Group justify="flex-end">
                    <Button
                      size="xs"
                      variant="outline"
                      onClick={handleCancelAddLimitation}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="xs"
                      onClick={handleAddLimitation}
                      disabled={!newLimitation.trim()}
                    >
                      Save
                    </Button>
                  </Group>
                </Stack>
              </Card>
            ) : (
              <Group justify="flex-end">
                <Button onClick={() => setShowAddLimitation(true)}>
                  Add Limitation
                </Button>
              </Group>
            )}
          </Box>

          <Divider />

          {mode === 'edit' && (
            <Select
              label="Status"
              placeholder="Select plan status"
              data={[
                { value: 'draft', label: 'Draft' },
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
              ]}
              {...form.getInputProps('status')}
            />
          )}

          <Switch
            label="Make popular"
            {...form.getInputProps('isPopular', { type: 'checkbox' })}
          />

          <Group justify="flex-end" mt="md">
            <Button onClick={close} size="md" variant="default">
              Cancel
            </Button>
            <Button
              type="submit"
              size="md"
              leftSection={
                mode === 'create' ? (
                  <Icon icon="cuida:plus-outline" />
                ) : (
                  <Icon icon="uil:edit" />
                )
              }
            >
              {mode === 'create' ? 'Create Plan' : 'Update Plan'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Card>
  );
};

export default PlanForm;
