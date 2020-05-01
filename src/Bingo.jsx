import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { Text } from 'spectacle';
import _ from 'lodash';
import styled from 'styled-components';

const localStorageBingoKey = '__coding_crash_course_programming_bingo__';

const BingoGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 100%;
  text-transform: uppercase;

  div {
    text-align: center !important;
    color: black;
    display: flex;
    justify-items: center;
    align-items: center;
    div {
      margin: auto;
    }
  }
`;

const itemsToPickFrom = [
  'Can anyone hear me?',
  'Connection lost',
  'Video stopped working',
  'Phone goes off',
  'Juf',
  'Sound of someone eating',
  'Emacs',
  'Julia',
  'Python',
  'We will wait a few more minutes',
  'Forgot to turn off screensharing',
  'Forgot to turn on screensharing',
  'Neighours make noise',
  'Corona',
  'Talk takes longer than 30 minutes',
  'Unclear audio',
  'Awkward silence',
  'The talk starts 30 late',
  'Irrelevant question',
  'Phone goes off',
  'Bell goes off',
  'Sibren is late',
  'Loud typing noises',
  'Can you repeat that?',
  '"I need to get a new beer"',
];

const Bingo = () => {
  const [bingo] = useLocalStorageState(localStorageBingoKey, {
    items: _.chunk(_.shuffle(itemsToPickFrom), 5),
  });

  return (
    <BingoGrid>
      {[0, 1, 2, 3, 4].map((row, rowIdx) =>
        bingo.items[row].map((item, idx) => (
          <div
            key={`bingo-{rowIdx}-${idx}`}
            style={{
              textAlign: 'center',
              backgroundColor: rowIdx === idx && idx === 2 ? '#ddd' : '#eee',
            }}
          >
            <Text fontSize="16px">
              {rowIdx === idx && idx === 2 ? 'FREE' : item}
            </Text>
          </div>
        ))
      )}
    </BingoGrid>
  );
};

export default Bingo;
