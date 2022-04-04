import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Button from 'components/common/button/button';
import ProgramIcon1 from 'images/svg/program1.inline.svg';
import ProgramIcon2 from 'images/svg/program2.inline.svg';
import ProgramIcon3 from 'images/svg/program3.inline.svg';
import ProgramIcon4 from 'images/svg/program4.inline.svg';
import ProgramIcon5 from 'images/svg/program5.inline.svg';
import ProgramIcon6 from 'images/svg/program6.inline.svg';
import CloseIcon from 'images/svg/btn-close.inline.svg';
import * as s from './PersonalProgramInfo.module.scss';

const icons = [
  <ProgramIcon1 />,
  <ProgramIcon2 />,
  <ProgramIcon3 />,
  <ProgramIcon4 />,
  <ProgramIcon5 />,
  <ProgramIcon6 />,
];

export default function PersonalProgramInfo({
  selectedProgram,
  closeInfoModal,
  onSingUpModalOpen,
}) {
  const { t } = useI18next();
  const data = t('aria', { returnObjects: true });

  return (
    <div className={s.modalContent}>
      <button
        className={s.closeBtn}
        onClick={closeInfoModal}
        aria-label={data.closeModalBtn}
      >
        <CloseIcon />
      </button>

      {icons[selectedProgram.index]}

      <h3 className={s.title}>{selectedProgram.item.title}</h3>

      <p className={s.text}>{selectedProgram.item.desc}</p>

      <Button classType={3} onBtnClick={onSingUpModalOpen} />
    </div>
  );
}
