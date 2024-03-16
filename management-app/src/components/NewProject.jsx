import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAddProject, onCancelProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modalRef.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      id: Math.random(),
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption='Close'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>
          Oops .. looks like you forgot to enter a value
        </p>
        <p className='text-stone-600 mb-4'>
          Plase make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              onClick={onCancelProject}
              className='text-stone-800 hover:text-stone-950'
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label='Title' ref={title} />
          <Input label='Description' textArea={true} ref={description} />
          <Input type='date' label='Due Date' ref={dueDate} />
        </div>
      </div>
    </>
  );
}
