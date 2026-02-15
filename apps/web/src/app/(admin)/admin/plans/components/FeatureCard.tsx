'use client';
import { Icon } from '@iconify/react';
import { ActionIcon, Card, Group, Text, TextInput, Button } from '@mantine/core';
import { useState } from 'react';

interface FeatureCardProps {
  feature: string;
  onEdit: (oldFeature: string, newFeature: string) => void;
  onDelete: (feature: string) => void;
}

const FeatureCard = ({ feature, onEdit, onDelete }: FeatureCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(feature);

  const handleSave = () => {
    if (editValue.trim() && editValue !== feature) {
      onEdit(feature, editValue.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(feature);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(feature);
  };

  return (
    <Card withBorder p="sm" radius="md">
      {isEditing ? (
        <Group justify="space-between" align="center">
          <TextInput
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder="Enter feature description"
            style={{ flex: 1 }}
            size="sm"
          />
          <Group gap="xs">
            <Button size="xs" onClick={handleSave} disabled={!editValue.trim()}>
              Save
            </Button>
            <Button size="xs" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </Group>
        </Group>
      ) : (
        <Group justify="space-between" align="center">
          <Text size="sm" style={{ flex: 1 }}>
            {feature}
          </Text>
          <Group gap="xs">
            <ActionIcon
              size="sm"
              variant="subtle"
              color="blue"
              onClick={() => setIsEditing(true)}
            >
              <Icon icon="lucide:edit" />
            </ActionIcon>
            <ActionIcon
              size="sm"
              variant="subtle"
              color="red"
              onClick={handleDelete}
            >
              <Icon icon="lucide:trash-2" />
            </ActionIcon>
          </Group>
        </Group>
      )}
    </Card>
  );
};

export default FeatureCard;