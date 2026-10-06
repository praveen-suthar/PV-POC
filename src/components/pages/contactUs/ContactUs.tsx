import React from 'react'
import { useTranslation } from 'react-i18next'
const ContactUs: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="content-padder">
      <div className="uk-flex uk-flex-middle mb-15">
        <img
          src={require('../../../assets/images/icons/mail.svg')}
          className="mr-8"
        />
        <h6 className="uk-margin-remove-vertical">{t('INQUIRY.CONTACT_US')}</h6>
      </div>
      <div className="uk-card gray-gradient-container">
        <div className="ml-8 mt-8">
          <span className=" color-white uk-display-block">
            {' '}
            {t('INQUIRY.INQUIRY_HEADER')}
          </span>
          <span className=" mb-8 color-white uk-display-block">
            {t('INQUIRY.INQUIRY_EMAIL')}
          </span>
          <span className=" mb-25 color-white uk-display-block">
            {t('INQUIRY.INQUIRY_DESCRIPTION')}
          </span>
          <span className='className="mb-15 color-white uk-display-block"'>
            {t('INQUIRY.JERA_CORPORATION')}
          </span>
        </div>
        <div className="uk-flex uk-flex-middle mt-15 ml-8 mb-20">
          <h6 className="uk-margin-remove-vertical"> {t('INQUIRY.EMAIL')}</h6>
          <img
            src={require('../../../assets/images/icons/content_copy.svg')}
            className="ml-8"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
