import styled from 'styled-components';

interface ProgressIndicatorProps {
  percentage: number;
}

const BackgroundRail = styled.div`
  position: relative;
  height: 5px;
  border-radius: 2px;
  background-color: var(--color-progress-rail);
  overflow: hidden;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-radius: 2px;
  background-color: var(--color-primary);
  transition: width 0.5s;
`;

export default function ProgressIndicator({ percentage }: ProgressIndicatorProps) {
  return (
    <BackgroundRail>
      <ProgressBar style={{ 'width': `${percentage}%` }} />
    </BackgroundRail>
  );
}
