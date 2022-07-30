import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { getAppData, getLanguageDataForApp, saveLanguageData } from '../services/application';
import ButtonComponent from '../components/Button';
import { Formik } from 'formik';

const Translate = () => {
  const location = useLocation();
  const appId = location.state.id;
  const appName = location.state.name;
  const [translateFrom, setTranslateFrom] = useState(null);
  const [translateTo, setTranslateTo] = useState(null);
  const [translateFromData, setTranslateFromData] = useState({});
  const [translateToData, setTranslateToData] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  const { data = { languageData: [] } } = useQuery(['getAppData', appId], () => getAppData(appId), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const [getTranslateFromLanguageData] = useMutation(() => getLanguageDataForApp(translateFrom), {
    onSuccess: (res) => {
      setTranslateFromData(res.data);
    },
  });

  const [getTranslateToLanguageData] = useMutation(() => getLanguageDataForApp(translateTo), {
    onSuccess: (res) => {
      setTranslateToData(res.data);
    },
  });

  const [saveChanges, { isLoading: isSavingChanges }] = useMutation(({ data }) => saveLanguageData(translateTo, data), {
    onSuccess: (res) => {
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 500);
    },
  });

  useEffect(() => {
    if (translateFrom) {
      getTranslateFromLanguageData();
    }
  }, [translateFrom, getTranslateFromLanguageData]);

  useEffect(() => {
    if (translateTo) {
      getTranslateToLanguageData();
    }
  }, [translateTo, getTranslateToLanguageData]);

  return (
    <div className="wrapper">
      <div>
        {successMessage && <div className="translate__notification">Sačuvano</div>}
        <div className="center-x">{appName}</div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px', flexWrap: 'wrap' }}>
          <select id="points" name="points" value={translateFrom} onChange={(e) => setTranslateFrom(e.target.value)}>
            <option value={''}>-- Izaberi jezik s kojeg prevodiš --</option>
            {data &&
              data.languageData &&
              data.languageData.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
          <select id="points" name="points" value={translateTo} onChange={(e) => setTranslateTo(e.target.value)}>
            <option value={''}>-- Izaberi jezik na koji radiš prevod --</option>
            {data &&
              data.languageData &&
              data.languageData.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <Formik
          enableReinitialize
          initialValues={translateToData}
          onSubmit={(values) => {
            console.log({ values });
            saveChanges({ data: values });
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="translate">
                {Object.keys(translateFromData).map((item) => (
                  <div key={item} className="translate__block">
                    <p>{translateFromData[item]}</p>
                    <textarea id={item} name={item} value={values[item]} onChange={handleChange} />
                  </div>
                ))}
              </div>
              <div className="center-x pt-2">
                <ButtonComponent
                  type="submit active"
                  onClick={handleSubmit}
                  disabled={!translateFrom || !translateTo || isSavingChanges}
                >
                  Sačuvaj
                </ButtonComponent>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Translate;
