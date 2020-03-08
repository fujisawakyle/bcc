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
            <b>When:</b> We are gonna celebrate from 11:30am to 4pm on Sunday, September 6, 2020. Please arrive hungry between 11:30am-12:00pm.
          </p>
          <p>
            <b>Where:</b> <a target="_blank" href="https://www.google.com/maps/place/33120+Agua+Dulce+Canyon+Rd,+Santa+Clarita,+CA+91390/@34.4908495,-118.328482,17z/data=!4m13!1m7!3m6!1s0x80c28a99247927c3:0xc3e2428db4380270!2s33120+Agua+Dulce+Canyon+Rd,+Santa+Clarita,+CA+91390!3b1!8m2!3d34.4908495!4d-118.3262933!3m4!1s0x80c28a99247927c3:0xc3e2428db4380270!8m2!3d34.4908495!4d-118.3262933">33120 Agua Dulce Canyon Rd, Santa Clarita, CA 91390</a>
          </p>
          <p>
            We are keeping it early so that you can go home safely in the early light of this autumn day!
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
            There is a parking lot down the road from the venue at <a target="_blank" href="https://www.google.com/maps/place/Agua+Dulce+Women's+Club/@34.4908495,-118.328482,17z/data=!4m13!1m7!3m6!1s0x80c28a99247927c3:0xc3e2428db4380270!2s33120+Agua+Dulce+Canyon+Rd,+Santa+Clarita,+CA+91390!3b1!8m2!3d34.4908495!4d-118.3262933!3m4!1s0x0:0xf30a7d75d732ed97!8m2!3d34.4928466!4d-118.3271997">Agua Dulce Women's Club Parking Lot</a>.
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
            Please arrive hungry between 11:30am-12:00pm. Lunch* will be served at 12pm, and we will begin the celebration at 12:30pm while you finish eating! Watch us say cute stuff for a little while. Next, we will have dancing and dessert. :^D
          </p>
          
          <br />
          <p>
            *We are happy to provide a bountiful meal that is free from dairy and animal products. While there will be options that are gluten-free, we cannot guarantee that these goodies have not been in contact with gluten.
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
            If you need help finding a hotel or if you’d like to be connected with other out-of-town guests to perhaps coordinate a shared Airbnb situation, send an email to <a href="mailto:Tessa.urb@gmail.com">Tessa.urb@gmail.com</a> and she will connect all y’all!
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
            <b>ABSOLUTELY NO GIFTS!</b>
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
            There is one really specific gift we want you to give us: You arrive at 11:30am and you stay and dance and laugh and have fun until the party is over at 4pm. You want to give us a gift? Stay! Hang out, dance, and take pictures with us. Let's be merry!
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
           
           We want you to feel comfortable and beautiful! Wear whatever you want - jeans, pretty dresses, who cares! Something to note is that the terrain at the venue is mostly dirt, so heels and fancy shoes are not recommended. 
           </p>
           <br/>
            
          <p>
          Additionally, it might be quite warm, so please keep that in mind. ☀️
        
               </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 8 */}

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What about alcohol/dranks?
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
          <br/>
          <p>
            We thank you for respecting this key part of our shared value system. <i class="fa fa-heart" />
          </p>
        </AccordionItemPanel>
      </AccordionItem>

    </Accordion>
  );
}