import Layout from '../../components/layout/layout';
import Map from '../../components/map/map';
import PageDecor from '../../components/page-decor/page-decor';
import { AppRoute } from '../../const';

export default function Contacts (): JSX.Element {
  return (
    <Layout layoutType={AppRoute.Contacts} >
      <main className="page-content decorated-page">
        <PageDecor size='big' />
        <div className="container">
          <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
            <p className="subtitle page-content__subtitle">квесты в&nbsp;Санкт-Петербурге
            </p>
            <h1 className="title title--size-m page-content__title">Контакты</h1>
          </div>
          <div className="contacts">
            <dl className="contacts__list">
              <div className="contacts__item">
                <dt className="contacts__dt">Адрес</dt>
                <dd className="contacts__dd">
                  <address className="contacts__address">Санкт-Петербург,<br /> Набережная реки Карповки, д 5П</address>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Режим работы</dt>
                <dd className="contacts__dd">Ежедневно, с&nbsp;10:00 до&nbsp;22:00</dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Телефон</dt>
                <dd className="contacts__dd">
                  <a className="link" href="tel:88003335599">8 (000) 111-11-11</a>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">E&ndash;mail</dt>
                <dd className="contacts__dd">
                  <a className="link" href="mailto:info@escape-room.ru">info@escape-room.ru</a>
                </dd>
              </div>
            </dl>
            <div className="contacts__map">
              <div className="map">
                <Map
                  location={ {address: '', coords: [59.968322, 30.317359]} }
                  bookings={[]}
                  currentBookingId={null}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
