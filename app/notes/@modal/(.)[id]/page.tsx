'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';

export default function ModalPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  return (
    <Modal isOpen={true} onClose={() => router.back()}>
      <NotePreview noteId={params.id} />
    </Modal>
  );
}