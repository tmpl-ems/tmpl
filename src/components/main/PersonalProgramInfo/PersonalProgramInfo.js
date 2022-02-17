import React from 'react';

import Button from 'components/common/button/button';
import ProgramIcon1 from 'images/svg/program1.svg';
import ProgramIcon2 from 'images/svg/program2.svg';
import ProgramIcon3 from 'images/svg/program3.svg';
import ProgramIcon4 from 'images/svg/program4.svg';
import ProgramIcon5 from 'images/svg/program5.svg';
import ProgramIcon6 from 'images/svg/program6.svg';
import CloseIcon from 'images/svg/btn-close.svg';
import * as s from './PersonalProgramInfo.module.scss';

export default function PersonalProgramInfo({
  selectedProgram,
  closeInfoModal,
  onSingUpModalOpen,
}) {
  const singUpHandler = () => {
    onSingUpModalOpen();
    closeInfoModal();
  };

  return (
    <div className={s.modalContent}>
      <button className={s.closeBtn} onClick={() => closeInfoModal()}>
        <CloseIcon />
      </button>

      {selectedProgram?.id === 1 && <ProgramIcon1 className={s.icon} />}
      {selectedProgram?.id === 2 && <ProgramIcon2 className={s.icon} />}
      {selectedProgram?.id === 3 && <ProgramIcon3 className={s.icon} />}
      {selectedProgram?.id === 4 && <ProgramIcon4 className={s.icon} />}
      {selectedProgram?.id === 5 && <ProgramIcon5 className={s.icon} />}
      {selectedProgram?.id === 6 && <ProgramIcon6 className={s.icon} />}

      <h3 className={s.title}>{selectedProgram.title}</h3>

      <p className={s.text}>{selectedProgram.desc}</p>

      <Button classType={3} onBtnClick={() => singUpHandler()} />
    </div>
  );
}
