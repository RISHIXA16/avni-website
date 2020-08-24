import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from "gatsby";

import Layout from "../components/Layout"
import Features from '../components/Features'
import LandingPageHero from "../components/LandingPageHero";
import {VerticalTileGroup} from "../components/Tile";
import ContactUs from "../components/ContactUs";
import ExternalLink from "../components/ExternalLink";
import ValueProposition from "../components/ValueProposition";
import Authority from "../components/Authority";
import Plan from "../components/Plan";
import Explanation from "../components/Explanation";

export const IndexPageTemplate = ({
                                      features,
                                  }) => (
    <div>
        <section style={{borderBottom: '1px solid #CCCCCC', borderTop: '0px solid #CCCCCC'}}>
            <div className="container">
                <div className="section">
                    <div className="content">
                        <ValueProposition gridItems={features.blurbs}/>
                        <br/><hr/><br/>
                        <Plan/>
                        <Authority/>
                        <Explanation/>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
        <ContactUs/>
        <br/>
    </div>
);

IndexPageTemplate.propTypes = {
    features: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
};

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <Layout hero={<LandingPageHero/>}>
            <IndexPageTemplate features={frontmatter.features}/>
        </Layout>
    )
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        features {
          blurbs {
            image
            title
            text
          }
        }
      }
    }
  }
`;
