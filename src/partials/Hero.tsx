import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Preeti</GradientText> 👋
        </>
      }
      description={
        <>
          I am Preeti Dash, a doctoral candidate in English literature from the Department of English, Gangadhar Meher University, Sambalpur, Odisha. My research concerns broadly fall under Indic Studies, Myth Studies and Philosophy. I have completed my M.Phil and MA from the Department of English, Utkal University, Odisha. Along with being an ardent student of literature, I also work as a content writer.
        </>
      }
      avatar={
        <img
          className="h-80 w-100"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* open in new tab */}
          <a href="https://twitter.com/dashly1993" target="_blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
