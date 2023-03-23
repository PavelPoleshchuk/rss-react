import MyInput from 'components/UI/MyInput/MyInput';
import React from 'react';

const FormPage = () => {
  return (
    <div style={{ width: '100%' }}>
      <form className="forms-page">
        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'title-input',
            labelTitle: 'Title:',
            type: 'text',
            id: 'title-input',
            placeholder: 'Insert product name',
          }}
        />

        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'date-input',
            labelTitle: 'Date:',
            type: 'date',
            id: 'date-input',
            placeholder: 'Insert product date',
          }}
        />

        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'price-input',
            labelTitle: 'Price:',
            type: 'number',
            id: 'price-input',
            placeholder: 'Insert product price',
          }}
        />
        <div className="forms-input">
          <label htmlFor="category-select">Type:</label>
          <select id="category-select">
            <option value="Cloth">Cloth</option>
            <option value="Shoes">Shoes</option>
            <option value="Hats">Hats</option>
          </select>
        </div>
        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'image-input',
            labelTitle: 'Image:',
            type: 'file',
            id: 'image-input',
            placeholder: 'Choice file',
            accept: 'image/jpeg,image/png,image/gif',
          }}
        />

        <MyInput
          data={{
            className: 'forms-input',
            htmlFor: 'checkbox-input',
            labelTitle: 'I agree:',
            type: 'checkbox',
            id: 'checkbox-input',
          }}
        />

        <div className="forms-input">
          <div className="radio-label">
            <label>Choose product status:</label>
          </div>
          <div className="radio-buttons">
            <label>
              <input type="radio" name="productStatus" value="new" checked={true} />
              New product
            </label>
            <label>
              <input type="radio" name="productStatus" value="used" />
              Used product
            </label>
          </div>
        </div>
        <div className="forms-input">
          {/* <label htmlFor="category-select">
            Status: <span></span>
          </label> */}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
