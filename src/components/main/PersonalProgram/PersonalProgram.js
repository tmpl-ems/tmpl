import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Section from 'components/common/section/section';
import Modal from 'components/common/Modal/Modal';
import PersonalProgramInfo from 'components/main/PersonalProgramInfo';
import ProgramIcon1 from 'images/svg/program1.inline.svg';
import ProgramIcon2 from 'images/svg/program2.inline.svg';
import ProgramIcon3 from 'images/svg/program3.inline.svg';
import ProgramIcon4 from 'images/svg/program4.inline.svg';
import ProgramIcon5 from 'images/svg/program5.inline.svg';
import ProgramIcon6 from 'images/svg/program6.inline.svg';
import FoneIcon1 from 'images/svg/program-polygon7.inline.svg';
import FoneIcon2 from 'images/svg/program-polygon9.inline.svg';
import FoneIcon3 from 'images/svg/program-polygon6.inline.svg';
import FoneIcon4 from 'images/svg/program-polygon10.inline.svg';
import * as s from './PersonalProgram.module.scss';

const icons = [
  <ProgramIcon1 />,
  <ProgramIcon2 />,
  <ProgramIcon3 />,
  <ProgramIcon4 />,
  <ProgramIcon5 />,
  <ProgramIcon6 />,
];

export default function PersonalProgram({
  onSingUpModalOpen,
  setSelectedProgram,
  selectedProgram,
  id,
}) {
  const { t } = useI18next();
  const data = t('personalPrograms', { returnObjects: true });

  const closeInfoModal = () => {
    setSelectedProgram(null);
  };

  return (
    <Section head={data.title} titleLevel="h2" id={id}>
      <ul className={`${s.textList} list`}>
        <li className={s.textItem}>
          <p className={s.text}>{data.subtitle1}</p>
        </li>

        <li className={s.textItem}>
          <p className={s.text}>{data.subtitle2}</p>
        </li>
      </ul>

      <div className={s.buttonsBox}>
        <ul className={`${s.buttonsList} list`}>
          {data.programs.map((item, index) => (
            <li key={item.id} className={s.buttonsItem}>
              <button
                className={s.button}
                onClick={() => setSelectedProgram({ item, index })}
              >
                {icons[index]}
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <FoneIcon1 className={s.foneIcon1} />
      <FoneIcon2 className={s.foneIcon2} />
      <FoneIcon3 className={s.foneIcon3} />
      <FoneIcon4 className={s.foneIcon4} />

      {selectedProgram && (
        <Modal closeModal={closeInfoModal}>
          <PersonalProgramInfo
            selectedProgram={selectedProgram}
            closeInfoModal={closeInfoModal}
            onSingUpModalOpen={onSingUpModalOpen}
          />
        </Modal>
      )}
    </Section>
  );
}
