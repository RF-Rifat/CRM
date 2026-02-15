export interface Event {
  id?: string;
  title: string;
  start: Date;
  end: Date;
  type: 'appointment' | 'reminder' | 'other' | 'meeting';
  description?: string;
  resource?: {
    type: string;
  };
}

export interface SlotInfo {
  start: Date;
  end: Date;
  slots: Date[];
  action: 'select' | 'click' | 'doubleClick';
}

export interface EventFormValues {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  type: 'appointment' | 'reminder' | 'other' | 'meeting';
}
