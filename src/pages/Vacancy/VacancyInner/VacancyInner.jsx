import React, { useState } from 'react';
import Header from '../../Main/components/Header/Header';
import Footer from '../../Main/components/Footer/Footer';
import './VacancyInner.scss';

const VacancyInner = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    telegram: '',
    phone: '',
    resume: null, // resume is kept for form control but will not be sent to json-server
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare JSON data (excluding file uploads)
    const data = {
      fullName: formData.fullName,
      telegram: formData.telegram,
      phone: formData.phone,
      // resume file will not be included here as json-server doesn't handle file uploads in this way
    };

    try {
      // Post request to json-server
      const response = await fetch('http://localhost:5000/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Заявка успешно отправлена!');
        setFormData({ fullName: '', telegram: '', phone: '', resume: null }); // Reset form after submission
      } else {
        alert('Ошибка при отправке заявки.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка.');
    }
  };

  return (
    <>
      <Header />
      <div className="vacancy_inner">
        <div className="container">
          <div className="vacancy_inner__wrapper">
            <div className="vacancy_addres">
              <p>
                <span>Udevs</span> / <span>Вакансия</span> / UI дизайнер
              </p>
            </div>
            <div className="vacancy_desc">
              <div className="name_vacancy">
                <p className="same_p">UI дизайнер</p>
              </div>
              <div className="desc_vacancy_first">
                <p className="kakie">Какие обязательности</p>
                <p className="loremm_p">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                </p>
                <p className="loremm_p">
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                </p>
                <p className="loremm_p">Non pellentesque congue eget consectetur turpis</p>
                <p className="loremm_p">
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                </p>
              </div>
              <div className="desc_vacancy_second">
                <p className="kakie">Что должен знать?</p>
                <p className="loremm_p">
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis элит erat nam nibh orci.
                </p>
                <p className="loremm_p">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                </p>
                <p className="loremm_p">
                  Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                </p>
              </div>
              <div className="work_uslov">
                <p className="kakie">Условия работы</p>
                <p className="loremm_p">Рабочий график: 5/2</p>
                <p className="loremm_p">Время работы: 9:00 - 18:00</p>
                <p className="loremm_p">Формат: в офисе</p>
              </div>
            </div>
            <div className="application_form">
              <h2>Оставить заявку</h2>
              <p>Заполните форму, и наши специалисты свяжутся с вами в ближайшее время.</p>
              <form className="form_content" onSubmit={handleSubmit}>
                <label>
                  ФИО
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Введите полное имя"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Телеграм
                  <input
                    type="text"
                    name="telegram"
                    placeholder="@company.com"
                    value={formData.telegram}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Номер телефона
                  <div className="phone_input">
                    <select name="countryCode" defaultValue="UZ">
                      <option value="UZ">UZ</option>
                      {/* Add more country options if needed */}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+998 (55) 000-00-00"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </label>

                <label className="file_upload">
                  Загрузите или перетащите ваше Резюме
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                  />
                  <span>.doc, PDF or JPG (max. 800x400px)</span>
                </label>

                <button type="submit">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VacancyInner;
