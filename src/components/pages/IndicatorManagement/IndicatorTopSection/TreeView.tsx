import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../../../context/themeContext'

const TreeView: React.FC = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  return (
    <>
      <div className="uk-child-width-1-2 uk-width-auto@s h-100-per" uk-grid>
        <div
          className={`p-25 uk-border-rounded gray-gradient-container ${theme.bgGradient.mainWithShadow} uk-width-1-1 h-100-per`}
        >
          <h6
            className={`uk-text-normal uk-margin-remove uk-text-center ${theme.color.main2} font-18`}
          >
            {t('TREE_VIEW.TITLE.CARBON_DIOXIDE_EMISSIONS_REDUCTION_TODAY')}
          </h6>
          <div className="font-20 uk-width-1-1 uk-flex uk-flex-center">
            <span>
              <span className={`uk-article-title font-40 ${theme.color.main}`}>
                4,000
              </span>
              <span className={`uk-text-small font-24 ${theme.color.light2}`}>
                {' '}
                {t('INDICATOR_MANAGEMENT.VALUE_SUFFIX.KG')}
              </span>
            </span>
          </div>
          <div className="uk-text-center mt-10">
            <span className={`font-16  ${theme.color.main2}`}>
              {t('TREE_VIEW.TITLE.APPROX_72_BROADLEAF_FOREST')}
            </span>
          </div>
          <div className="uk-margin-top pt-20 tree-view-container" style={{}}>
            <img
              alt="treeview-bg"
              className="uk-width-1-1 h-170"
              src={require('../../../../assets/images/tree-view.png')}
            />
            <img
              src={require('../../../../assets/images/tree-view-cartoon-1.png')}
              alt="cartoon-1"
              className="c-1"
            />
            <img
              src={require('../../../../assets/images/tree-view-cartoon-2.png')}
              alt="cartoon-2"
              className="c-2"
            />
            <img
              src={require('../../../../assets/images/tree-view-cartoon-3.png')}
              alt="cartoon-3"
              className="c-3"
            />
            <img
              src={require('../../../../assets/images/tree-view-cartoon-4.png')}
              alt="cartoon-4"
              className="c-4"
            />
            <img
              src={require('../../../../assets/images/tree-view-cartoon-5.png')}
              alt="cartoon-5"
              className="c-5"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default TreeView
