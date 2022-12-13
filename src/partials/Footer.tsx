import { Section } from 'astro-boilerplate-components';

// import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <hr></hr>
    <div className='mt-2'>
    © Copyright 2022 by Preeti resume. Built with ♥ by <a href='https://princeraj.co'>StarkPrince</a>.
    </div>
    {/* <FooterCopyright site_name={AppConfig.site_name} /> */}
  </Section>
);

export { Footer };
