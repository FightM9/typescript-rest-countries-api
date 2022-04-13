import { useAppSelector } from '../../hooks/redux';
import { LoadingStatusEnum } from '../../shared/enums';
import Container from '../../components/Layouts/Container';
import Spinner from '../../components/Spinner/Spinner';
import Error from '../Error';
import CountriesList from './components/CountriesList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import Content from '../../components/Layouts/Content';

const Country = () => {
  const { loading, error } = useAppSelector((state) => state.countriesReducer);

  switch (loading) {
    case LoadingStatusEnum.pending:
      return <Spinner />;

    case LoadingStatusEnum.failed:
      return <Error message={error} />;

    case LoadingStatusEnum.succeeded:
      return (
        <Container>
          <Content aside={true} side='left'>
            <aside>
              <Filter />
            </aside>
            <div>
              <Sort />
              <main>
                <CountriesList />
              </main>
            </div>
          </Content>
        </Container>
      );
  }
};

export default Country;
