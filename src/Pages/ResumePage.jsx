import React from 'react';
import Form from '../features/Form/Form';
import ResumePreview from '../features/ResumePreview/ResumePreview';

export default function ResumePage() {
  return (
    <div className="grid grid-cols-2 gap-x-5 py-6 px-6 dark:bg-gray-900">
      <Form />
      <ResumePreview />
    </div>
  );
}
