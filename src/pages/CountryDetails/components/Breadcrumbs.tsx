import { Link, useParams } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
  let { name = '' } = useParams();

  return (
    <div className={styles.container}>
      <span>
        <Link to='/'>Country</Link>
      </span>
      <span>{name}</span>
    </div>
  );
}
