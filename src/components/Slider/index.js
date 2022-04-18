import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import style from './Slider.module.css';

const Slider = () => {
  return (
    <section className={style.section}>
      <div className={style.slider}>
        <Container className={style.sliderContent}>
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2} className={style.subheader}>
            Heading 2
          </Heading>
          <div className={style.call}>
            <button className={style.button}>Wow</button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Slider;
