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
            Yes and no. This is the closest we're getting to the idea of a wedding, to celebrate our shared love for one another, but we're not calling it a wedding because we're not following any of the traditions.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 2 */}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            OMG... why won’t you just call it a wedding? 🙄
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Several reasons! We will cover these reasons in our lecture - *ahem* I mean, ceremony - on September 6. Please join us in calling it a BCC: Beautiful Commitment Celebration!
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 3 */}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            When and where?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            <b>When:</b> We are gonna celebrate between 10am and 4pm on Sunday, September 6, 2020.
          </p>
          <p>
            <b>Where:</b> <a target="_blank" href="https://www.google.com/maps/place/Agua+Dulce,+CA+91390/@34.4964153,-118.3431873,14z/data=!3m1!4b1!4m5!3m4!1s0x80c263cb72c77aff:0xe7d20bff6c3db594!8m2!3d34.4963817!4d-118.3256348">Agua Dulce, CA</a>
          </p>
          <p>
            We are keeping it early so that you can go home safely in the light of this early autumn day!
          </p>
          <p>
            It’s gonna be HOT. Please dress accordingly!
          </p>
        </AccordionItemPanel>
      </AccordionItem>


      {/* 3 */}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Where do I park?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            There is a parking lot down the road from the venue at ___.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 4 */}

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What’s gonna happen?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            You’re gonna arrive between 10 and 10:40. You’re gonna enjoy some coffee and tea and live music.
          </p>
          <br />
          <p>
            Then, at 11:00 (ON THE DOT), we are going to have a brief observance that will help you all understand what we are celebrating and what we are committing to. This ceremony-type deal will also integrate some singing and music. The important part is that you are all there to witness us make our commitment public.
          </p>
          <br />
          <p>
            After our lil ceremony, we will have a big satisfying lunch and some delicious cake.
          </p>

        </AccordionItemPanel>
      </AccordionItem>

      {/* 5 */}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Where can I stay?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Oh, jeez. IDK. If you’d like to be connected with other out-of-town guests to perhaps coordinate a shared Airbnb situation, send an email to <a href="mailto:Tessa.urb@gmail.com">Tessa.urb@gmail.com</a> and she will connect all y’all!
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 6 */}

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What is the gift policy?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            <b>NO GIFTS!</b>
          </p>
          <br />
          <p>
            We firmly ask that you bring no physical gifts and that you send us no money or online gifts.
          </p>
          <br />
          <p>
            This is really important to us, and we would like for our guests to respect that.
          </p>
          <br />
          <p>
            There is one really specific gift we want you to give us: You arrive at 10:30am and you stay and dance and laugh and have fun until the party is over at 4pm. You want to give us a gift? Stay. Hang out. Take pictures with us. Dance with us. LET’S BE MERRY.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 7 */}

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What is the dress code?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Doesn't matter, but it’s gonna be HOT. Please dress accordingly!
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 8 */}

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What about alcohol?
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Neither of us drink, each for our own personal reasons. We believe that energy flows where attention goes. Thus, we will not be serving alcohol, and there will be no bar.
          </p>
          <br />
          <p>
            If you feel inclined to drink, we ask that you do so off of the property.
          </p>
          <p>
            We thank you for respecting this key part of our shared value system. <i class="fa fa-heart" />
          </p>
        </AccordionItemPanel>
      </AccordionItem>

    </Accordion>
  );
}