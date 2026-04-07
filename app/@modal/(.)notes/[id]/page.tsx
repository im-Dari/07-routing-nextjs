'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NotePreviewClient from './NotePreview.client';

export default function ModalPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = React.use(params);

  return (
    <Modal isOpen={true} onClose={() => router.back()}>
      <NotePreviewClient noteId={id} />
    </Modal>
  );
}