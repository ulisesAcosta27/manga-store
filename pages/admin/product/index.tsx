import { useState, ChangeEvent, FormEvent } from "react";
import { NextPage } from "next";
import { AdminLayout } from "@/components/layouts";
import { ICreateProduct } from "@/interfaces";
import { Form } from "@/libs";

const ProductPageAdmin: NextPage = () => {
  type evenInputChange = ChangeEvent<HTMLInputElement & HTMLTextAreaElement>;
  const [createProduct, setCreateProduct] = useState<ICreateProduct>({
    name: "",
    author: "",
    category: "",
    description: "",
    seller: "",
    imgUrl: "",
    tags: [],
    inStock: 0,
    price: 0,
  });


  const handleInputChange = (event: evenInputChange) => {
    const { name, value } = event.target;
    setCreateProduct((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = Form.safeParse(createProduct);
    console.log(formData);
  };

  return (
    <AdminLayout name="Manga Store - Create Product">
      <form className="container mx-auto py-10" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Create Product</p>
          <button type="submit" className="global-button px-4">
            Agregar Producto
          </button>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col p-4">
            <div className="container-input">
              <label className="global-label">Nombre</label>
              <input
                type="text"
                name="name"
                className="global-input"
                value={createProduct.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="container-input">
              <label className="global-label">Descripcion</label>
              <textarea
                name="description"
                cols={1000}
                rows={15}
                value={createProduct.description}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md my-1 p-4"
              ></textarea>
            </div>
            <div className="container-input">
              <label className="global-label">Precio</label>
              <input
                type="number"
                name="price"
                className="global-input"
                value={createProduct.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="container-input">
              <label className="global-label">Autor</label>
              <input
                type="text"
                name="author"
                className="global-input"
                value={createProduct.author}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="container-input">
              <label className="global-label">Vendedor</label>
              <input
                type="text"
                name="seller"
                className="global-input"
                value={createProduct.seller}
                onChange={handleInputChange}
              />
            </div>
            <div className="container-input">
              <label className="global-label">Stock</label>
              <input
                type="number"
                name="inStock"
                className="global-input"
                value={createProduct.inStock}
                onChange={handleInputChange}
              />
            </div>

            <div className="container-input">
              <label className="global-label">Tags</label>
              <textarea
                name="tags"
                id=""
                cols={30}
                rows={10}
                className="global-input-big"
                value={createProduct.tags}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="container-input">
              <label className="global-label">Categoria</label>
              <input
                type="text"
                name="category"
                className="global-input"
                value={createProduct.category}
                onChange={handleInputChange}
              />
            </div>
            <div className="container-input">
              <label className="inline-block mb-2 text-gray-700">Imagen</label>
              <input
                type="file"
                name="imgUrl"
                className="button-form-image"
                defaultValue={createProduct.imgUrl}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default ProductPageAdmin;
