import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Container from '../../components/Layouts/Container';
import { LoadingStatusEnum } from '../../shared/enums';
import { fetchCounryDetails, setLoadPending } from '../../store/reducer/CountryDetailsSlice';
import Error from '../Error';
import Borders from './components/Borders';
import Breadcrumbs from './components/Breadcrumbs';
import ContryInfo from './components/ContryInfo';

function CountryDetails() {
  let { name = '' } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(
    (state) => state.countryDetailsReducer
  );

  useEffect(() => {
    dispatch(fetchCounryDetails(name));
    return () => {
      dispatch(setLoadPending());
    };
  }, [name, dispatch]);

  switch (loading) {
    case LoadingStatusEnum.pending:
      return <Spinner />;
    case LoadingStatusEnum.failed:
      return <Error message={error} />;

    case LoadingStatusEnum.succeeded:
      return (
        <Container>
          <Breadcrumbs />
          <ContryInfo />
          <Borders />
        </Container>
      );
  }
}

export default CountryDetails;
