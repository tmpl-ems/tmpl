import React, { useState } from 'react';

import Section from 'components/common/section/section';
import PersonalProgramInfo from 'components/main/PersonalProgramInfo';
import ProgramIcon1 from 'images/svg/program1.svg';
import ProgramIcon2 from 'images/svg/program2.svg';
import ProgramIcon3 from 'images/svg/program3.svg';
import ProgramIcon4 from 'images/svg/program4.svg';
import ProgramIcon5 from 'images/svg/program5.svg';
import ProgramIcon6 from 'images/svg/program6.svg';
import FoneIcon1 from 'images/svg/program-polygon7.svg';
import FoneIcon2 from 'images/svg/program-polygon9.svg';
import FoneIcon3 from 'images/svg/program-polygon6.svg';
import FoneIcon4 from 'images/svg/program-polygon10.svg';
import * as s from './PersonalProgram.module.scss';

const data = {
  ru: {
    text: {
      t1: 'Вы строите свою индивидуальную программу совместно с тренером под ваши личные цели и пожелания.',
      t2: 'Выбирайте, что вас интересует больше всего, и записывайтесь на пробное занятие:',
    },

    programs: {
      p1: {
        id: 1,
        title: 'Похудение и антицеллюлит',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque lacus, semper tincidunt ipsum egestas nulla. Egestas facilisi consectetur luctus a.',
      },
      p2: {
        id: 2,
        title: 'Мышечная масса и рельеф',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque lacus, semper tincidunt ipsum egestas nulla. Egestas facilisi consectetur luctus a.',
      },
      p3: {
        id: 3,
        title: 'Упругие ягодицы и идеальный пресс',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque lacus, semper tincidunt ipsum egestas nulla. Egestas facilisi consectetur luctus a.',
      },
      p4: {
        id: 4,
        title: 'Восстановление после родов',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque lacus, semper tincidunt ipsum egestas nulla. Egestas facilisi consectetur luctus a.',
      },
      p5: {
        id: 5,
        title: 'Здоровая спина и прямая осанка',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque lacus, semper tincidunt ipsum egestas nulla. Egestas facilisi consectetur luctus a.',
      },
      p6: {
        id: 6,
        title: 'Реабилитация после травм',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pellentesque lacus, semper tincidunt ipsum egestas nulla. Egestas facilisi consectetur luctus a.',
      },
    },
  },
};

export default function PersonalProgram() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const getSelectedProgram = id => {
    setSelectedProgram(data.ru.programs[id]);
  };

  const closeInfoModal = () => {
    setSelectedProgram(null);
  };

  return (
    <Section head="Программы" titleLevel="h2">
      <ul className={`${s.textList} list`}>
        <li className={s.textItem}>
          <p className={s.text}>{data.ru.text.t1}</p>
        </li>

        <li className={s.textItem}>
          <p className={s.text}>{data.ru.text.t2}</p>
        </li>
      </ul>

      <div className={s.buttonsBox}>
        <ul className={`${s.buttonsList} list`}>
          <li className={s.buttonsItem}>
            <button
              className={s.button}
              onClick={() => getSelectedProgram('p1')}
            >
              <ProgramIcon1 />
              {data.ru.programs.p1.title}
            </button>
          </li>

          <li className={s.buttonsItem}>
            <button
              className={s.button}
              onClick={() => getSelectedProgram('p2')}
            >
              <ProgramIcon2 />
              {data.ru.programs.p2.title}
            </button>
          </li>

          <li className={s.buttonsItem}>
            <button
              className={s.button}
              onClick={() => getSelectedProgram('p3')}
            >
              <ProgramIcon3 />
              {data.ru.programs.p3.title}
            </button>
          </li>

          <li className={s.buttonsItem}>
            <button
              className={s.button}
              onClick={() => getSelectedProgram('p4')}
            >
              <ProgramIcon4 />
              {data.ru.programs.p4.title}
            </button>
          </li>

          <li className={s.buttonsItem}>
            <button
              className={s.button}
              onClick={() => getSelectedProgram('p5')}
            >
              <ProgramIcon5 />
              {data.ru.programs.p5.title}
            </button>
          </li>

          <li className={s.buttonsItem}>
            <button
              className={s.button}
              onClick={() => getSelectedProgram('p6')}
            >
              <ProgramIcon6 />
              {data.ru.programs.p6.title}
            </button>
          </li>
        </ul>
      </div>

      <FoneIcon1 className={s.foneIcon1} />
      <FoneIcon2 className={s.foneIcon2} />
      <FoneIcon3 className={s.foneIcon3} />
      <FoneIcon4 className={s.foneIcon4} />

      {selectedProgram && (
        <PersonalProgramInfo
          selectedProgram={selectedProgram}
          closeInfoModal={closeInfoModal}
        />
      )}
    </Section>
  );
}
