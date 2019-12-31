import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';
import '../assets/css/accordion.css'

export default function Example() {
  return (
    <Accordion allowMultipleExpanded="true" allowMultipleExpanded="false">
      {/* 1 */}
      <AccordionItem preExpanded='0'>
        <AccordionItemHeading>
          <AccordionItemButton>
            Is this a wedding?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            T: Tessa has an answer too.
          </p>
          <br />
          <p>
            K: Yes and no. This is the closest we're getting to the idea of a wedding, to celebrate our shared love for one another, but we're not calling it a wedding because we're not following any of the traditions.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 2 */}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            When is it?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            September 12, 2020
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 3 */}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Where is it?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            <a target="_blank" href="https://www.google.com/maps/place/Agua+Dulce,+CA+91390/@34.4964153,-118.3431873,14z/data=!3m1!4b1!4m5!3m4!1s0x80c263cb72c77aff:0xe7d20bff6c3db594!8m2!3d34.4963817!4d-118.3256348">Agua Dulce, CA</a>
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 4 */}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What is the dress code?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            T: Tessa has an answer too.
          </p>
          <br />
          <p>
            K: Doesn't matter to me.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}