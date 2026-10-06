import React from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  classString?: string,
  pageCount: number,
  pageRangeDisplayed?: number,
  marginPagesDisplayed?: number,

  /* eslint-disable no-unused-vars */
  onPageChange: (selected: number) => void,
  /* eslint-enable no-unused-vars */

  // eslint-disable-next-line react/require-default-props
  children?: never,
}

const Paginate: React.FC<Props> = ({
  classString,
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  onPageChange,
}) => (
  <div className={`${classString || ''}`}>
    <div className="molecules-paginate">
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed || 3}
        marginPagesDisplayed={marginPagesDisplayed || 3}
        pageClassName="uk-display-inline"
        previousClassName="uk-display-inline"
        nextClassName="uk-display-inline"
        breakClassName="uk-display-inline"
        pageLinkClassName="uk-button uk-button-default uk-button-small"
        previousLinkClassName="uk-button uk-button-default uk-button-small uk-margin-right"
        nextLinkClassName="uk-button uk-button-default uk-button-small uk-margin-left"
        activeLinkClassName="uk-button uk-button-default uk-button-small uk-button-primary"
        breakLinkClassName="uk-button uk-button-default uk-button-small uk-disabled"
        previousLabel="<"
        nextLabel=">"
        onPageChange={(d) => onPageChange(d.selected)}
      />
    </div>
  </div>
);

Paginate.defaultProps = {
  classString: '',
  pageRangeDisplayed: 3,
  marginPagesDisplayed: 3,
};

export {
  Paginate,
};
