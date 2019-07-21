import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Gear = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="John Roberts - about" />
      <h1>Gear I use</h1>
      <h4>Coding stuff</h4>
      <ul>
        <li>
          <strong>Laptop</strong> - MacBook Pro (Retina, 13-inch, Early 2015).
          Broken screen and keyboard because an air conditioner at an office
          leaked all over it once!
        </li>
        <li>
          <strong>Keyboard</strong> - Filco Majestouch Minila Air Mechanical
          Bluetooth Keyboard
          <a
            href="https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.30.65f97484tFKhXy&id=527386125426&skuId=3719085839839"
            target="_blank"
            rel="noopener noreferrer"
          >
            (the pink one)
          </a>
        </li>
        <li>
          <strong>Text editor</strong> -{' '}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VS code
          </a>{' '}
          of course. I use the{' '}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            material theme
          </a>{' '}
          and also the font with a cool name called{' '}
          <a href="https://dank.sh/" target="_blank" rel="noopener noreferrer">
            dank mono.
          </a>
        </li>
        <li>
          <strong>Monitor</strong> - Dell{' '}
          <a
            href="https://item.jd.com/2316993.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'U2417H 24"'}
          </a>{' '}
          works fine.
        </li>
      </ul>
      <h4>Music gear</h4>
      <ul>
        <li>
          {' '}
          <strong>Monitors</strong> -{' '}
          <a
            href="https://www.amazon.com/KRK-RP5G3-Powered-Studio-Monitor/dp/B00EO7UNXO"
            target="_blank"
            rel="noopener noreferrer"
          >
            KRK Rokit 5
          </a>{' '}
          limited run silver edition.
        </li>
        <li>
          <strong>Headphones</strong> - Currently using{' '}
          <a
            href="https://global.beyerdynamic.com/dt-770-pro.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beyerdynamic dt 770 pro
          </a>
        </li>
        <li>
          <strong>Audio interface</strong> - I use the{' '}
          <a
            href="https://apogeedigital.com/products/duet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apogee duet
          </a>
        </li>
        <li>
          <strong>Field recordings</strong> - I have a{' '}
          <a
            href="https://www.zoom-na.com/products/field-video-recording/field-recording/zoom-h5-handy-recorder"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zoom h5 handy recorder
          </a>{' '}
          for this purpose.
        </li>
        <li>
          <strong>DAW</strong> -{' '}
          <a
            href="https://www.ableton.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ableton Live
          </a>
          , obviously.
        </li>
      </ul>
      <h4>Climbing Gear</h4>
      <ul>
        <li>
          <strong>Rope</strong> -{' '}
          <a
            href="https://shop.epictv.com/en/ropes/mammut/98-eternity-classic-2015"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mammut Eternity Classic 9.8mm
          </a>
        </li>
        <li>
          <strong>Quickdraws</strong> -{' '}
          <a
            href="https://www.blackdiamondequipment.com/en/climbing-carabiners-quickdraws/posiwire-quickdraw-BD381081_cfg.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            12 x Black Diamond Posiwire
          </a>
        </li>
        <li>
          <strong>Shoes</strong> -{' '}
          <a
            href="https://www.sportiva.com/otaki.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            La Sportiva Otaki
          </a>
        </li>
        <li>
          <strong>Helmet</strong> - seriously, stay safe. Falling rocks kill. I
          have the{' '}
          <a
            href="https://www.blackdiamondequipment.com/en/climbing-helmets/vector-BD620213_cfg.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Black Diamond Vector
          </a>
          .
        </li>
      </ul>
    </Layout>
  );
};

Gear.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default Gear;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
