/* eslint-disable @next/next/no-img-element */
'use client';
import { Dialog, Transition } from '@headlessui/react';
import { useFormikContext } from 'formik';
import { Fragment, useState } from 'react';
import { BsCameraFill, BsTrash } from 'react-icons/bs';

export const UploadImageModal = ({ name }: { name: any }) => {
  const [uploadModal, setUploadModal] = useState<boolean>(false);
  const [image, setImage] = useState<any>(null);

  const formik = useFormikContext();

  const openUploadModal = () => {
    setUploadModal(true);
  };

  const closeUploadModal = () => {
    setUploadModal(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImage({ file, previewURL });
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  const saveImage = () => {
    formik.setFieldValue(name, image.file);
    closeUploadModal();
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button type="button" onClick={openUploadModal}>
          <BsCameraFill className="h-6 w-6 hover:text-primary" />
        </button>
      </div>

      <Transition appear show={uploadModal} as={Fragment}>
        <Dialog as="div" open={uploadModal} onClose={closeUploadModal}>
          {/* Dialog content */}
          <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-[800px] my-8 text-black dark:text-white-dark">
                <div className="p-5">
                  <div className="label-container mb-5">
                    <label>Upload</label>
                    {image && (
                      <button type="button" className="custom-file-container__image-clear" title="Clear Image" onClick={clearImage}>
                        <BsTrash className="h-5 w-5 hover:text-danger" />
                      </button>
                    )}
                  </div>

                  <div className="upload__image-wrapper">
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="custom-file-container__custom-file__custom-file-control" />
                    {image && (
                      <div className="custom-file-container__image-preview relative">
                        <img src={image.previewURL} alt="img" className="m-auto" style={{ maxWidth: '100%', maxHeight: '400px' }} />
                      </div>
                    )}
                  </div>

                  {!image && <img src="/assets/images/file-preview.svg" width={200} height={200} className="m-auto w-full mt-5 max-w-md" alt="" />}

                  <div className="flex mt-4 justify-center">
                    <button type="button" className="btn btn-outline-success w-[250px]" onClick={saveImage}>
                      Save Image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
