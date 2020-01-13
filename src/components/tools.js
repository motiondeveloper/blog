import React from 'react';

import Card from '../components/card';
import { Copy, HeadingSmall, HeadingLarge } from '../components/type';
import { HorizontalStack, StackItem } from './stack';
import LinkButton from '../components/linkButton';
import { CodeJS } from './CodeJS';

const eKeysCode = `const inKeys = [
  {
    keyTime: 1,
    keyValue: 0,
    easeOut: 66,
  },{
    keyTime: 2,
    keyValue: 250,
    easeIn: 90,
  }
];

eKeys.animate(inKeys, time);
`;

const eBoxCode = `const myBox =
  eBox.createBox({
    size: [200, 200],
    position: [0, 0],
    anchor: 'center',
  });

myBox.setScale(
  [scaleIn, 100], 
  'topLeft’
);

myBox.getPath();
`;

const Tools = () => {
  return (
    <section>
      <h2>
        <HeadingSmall>After Effects Tools</HeadingSmall>
      </h2>
      <Card>
        <HorizontalStack mt="0">
          <StackItem>
            <h3>
              <HeadingLarge>eKeys</HeadingLarge>
            </h3>
            <Copy>
              Create keyframes within expressions - with full control over
              easing.
            </Copy>
            <Copy>
              {' '}
              eKeys gives you the control you need to create dynamic templates,
              with the smooth animation your used to with keyframes.{' '}
            </Copy>
            <LinkButton
              isLocal={true}
              type="secondary"
              to="/blog/how-to-animate-with-expressions"
            >
              Read intro to eKeys
            </LinkButton>
          </StackItem>
          <StackItem>
            <CodeJS>{eKeysCode}</CodeJS>
          </StackItem>
        </HorizontalStack>
      </Card>
      <Card>
        <HorizontalStack mt="0">
          <StackItem>
            <h3>
              <HeadingLarge>eBox</HeadingLarge>
            </h3>
            <Copy>
              Easily create, position and scale rectangles from any anchor
              point.
            </Copy>
            <LinkButton
              isLocal={false}
              type="secondary"
              href="https://github.com/motiondeveloper/ebox"
            >
              Get eBox
            </LinkButton>
          </StackItem>
          <StackItem>
            <CodeJS>{eBoxCode}</CodeJS>
          </StackItem>
        </HorizontalStack>
      </Card>
      <Copy>
        <a href="https://github.com/motiondeveloper">
          View all tools on Github
        </a>
      </Copy>
    </section>
  );
};

export default Tools;
