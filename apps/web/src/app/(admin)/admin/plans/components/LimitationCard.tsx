'use client';
import { Icon } from '@iconify/react';
import { ActionIcon, Card, Group, Text, TextInput, Button } from '@mantine/core';
import { useState } from 'react';

interface LimitationCardProps {
  limitation: string;
  onEdit: (oldLimitation: string, newLimitation: string) => void;
  onDelete: (limitation: string) => void;
}

const LimitationCard = ({ limitation, onEdit, onDelete }: LimitationCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(limitation);

  const handleSave = () => {
    if (editValue.trim() && editValue !== limitation) {
      onEdit(limitation, editValue.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(limitation);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(limitation);
  };

  return (
    <Card withBorder p="sm" radius="md">
      {isEditing ? (
        <Group justify="space-between" align="center">
          <TextInput
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder="Enter limitation description"
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
            {limitation}
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

export default LimitationCard;