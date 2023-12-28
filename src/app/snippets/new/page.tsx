'use client';

import * as actions from '@/actions';
import { useFormState } from 'react-dom';

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, { message: '' });
  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input id="title" name="title" className="border rounded p-2 w-full" />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea id="code" name="code" className="border rounded p-2 w-full" />
        </div>
        {formState.message ? (
          <div className="my-2 p-2 bg-red-200 border border-red-400 rounded">
            {formState.message}
          </div>
        ) : null}
        <button type="submit" className="border rounded p-2 bg-blue-300">
          Create
        </button>
      </div>
    </form>
  );
}
