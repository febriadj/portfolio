import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import style from '../../../styles/components/dashboard/article/create.css';

function Create({
  setCreateFormIsOpen,
  handleGetArticles,
}) {
  const isDev = process.env.NODE_ENV === 'development';

  const { user } = useSelector((state) => state);

  const fileRef = useRef(null);
  const [form, setForm] = useState({
    title: '',
    tags: '',
    shortDesc: '',
    file: null,
    content: '',
  });

  const handleChange = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const handleInputFile = (event) => {
    setForm((prev) => ({
      ...prev,
      file: event.target.files[0],
    }));
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const token = localStorage.getItem('token');
      const url = isDev ? 'http://localhost:8080/api/articles' : '/api/articles';

      const fd = new FormData();

      fd.append('title', form.title);
      fd.append('author', user.username);
      fd.append('shortDesc', form.shortDesc);
      fd.append('tags', form.tags.split(/[\s,]+/g));
      fd.append('file', form.file);
      fd.append('content', form.content);

      const request = await (await fetch(url, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      })).json();

      if (!request.success) throw request;

      setForm((prev) => ({
        ...prev,
        title: '',
        tags: '',
        shortDesc: '',
        file: null,
        content: '',
      }));

      fileRef.current.value = null;
      handleGetArticles();

      setTimeout(() => {
        setCreateFormIsOpen(false);
      }, 800);
    }
    catch (error0) {
      console.error(error0.message);
    }
  }

  return (
    <div className={style.create}>
      <form className={style['create-wrap']} onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={style.main}>
          <div className={style.nav}>
            <h2 className={style.title}>Create</h2>
            <button
              type="button"
              className={style.btn}
              onClick={() => {
                setCreateFormIsOpen((prev) => !prev);
              }}
            >
              <box-icon name="x"></box-icon>
            </button>
          </div>
          <div className={style.form}>
            <input
              type="text"
              name="title"
              placeholder="Article title"
              className={style.control}
              value={form.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="tags"
              placeholder="Tags"
              className={style.control}
              value={form.tags}
              onChange={handleChange}
            />
            <input
              type="text"
              name="shortDesc"
              placeholder="Short description"
              className={style.control}
              value={form.shortDesc}
              onChange={handleChange}
            />
            <label htmlFor="file" className={style.dropzone}>
              <input
                type="file"
                name="file"
                id="file"
                className={style.control}
                ref={fileRef}
                onChange={handleInputFile}
              />
              { !form.file && <box-icon name="file-blank" size="md"></box-icon> }
              { form.file && <p>{form.file.name}</p> }
            </label>
            <button type="submit" className={style['submit-btn']}>Submit</button>
          </div>
        </div>
        <div className={style.editor}>
          <Editor
            apiKey="qvl7p3hfz6ynkug709adzjyiw6mle0fn8bhnjvvvhs7sekyk"
            onEditorChange={(event) => {
              setForm((prev) => ({
                ...prev,
                content: event,
              }));
            }}
            init={{
              content_style: 'p { margin: 0 }',
              menubar: false,
              plugins: 'link image table code lists fullscreen insertdatetime',
              toolbar: 'undo redo | styleselect bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link image table youtube giphy insertdatetime | codesample code | fullscreen',
              resize: false,
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Create;
