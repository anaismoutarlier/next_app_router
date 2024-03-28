"use client";
import { useState } from "react";
import { createPost } from "@actions/createPost";
import { useRouter } from "next/navigation"; // APP ROUTER
// XXXX import { useRouter } from "next/router" XXX QUE POUR PAGES ROUTER
const fields = [
  {
    name: "title",
    placeholder: "Title",
  },
  {
    name: "content",
    placeholder: "Content",
  },
  {
    name: "createdBy",
    placeholder: "Username",
  },
];
export function AddPostForm() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const json = await createPost(formData);
    if (json.result) router.refresh();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {fields.map(el => (
        <input key={el.name} {...el} onChange={handleChange} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
