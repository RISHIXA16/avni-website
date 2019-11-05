import React from "react";
import Layout from "../../components/Layout";


export default function Index() {
  return (
    <Layout>
      <div className="container">
        <div className="columns is-mobile is-multiline">
          <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
            <div className="content">
              <h1 className="title">Demo</h1>
              <h3>Install the app from Android Play Store</h3>
              <p>
                On your Android device, go to <b>Play Store</b>&nbsp;
                <a href="https://play.google.com/store/apps/details?id=com.openchsclient">[link]</a>,
                &nbsp;search for OpenCHS, and <b>install</b> the app. See below the logins which you can use. These demos are inspired from real implementations of Avni, created to demonstrate flexibility of the platform.
              </p>
              <p>
                <small>
                  <i>
                    <b>Note</b>: After trying one demo if you want to try a different demo login,
                    then you would need to uninstall the app and install it again.
                  </i>
                </small>
              </p>
            </div>
          </div>
          <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
            <br/>
            <br/>
            <br/>
            <div className="content has-background-grey-lighter" style={{ padding: '2em'}}>
              <h2>Schedule a one-on-one demo</h2>
              <p>
                If you would like a personalised demo over Google Hangouts or Skype,
                drop us a mail at&nbsp;
                <a href="mailto:avni-project@googlegroups.com">avni-project@googlegroups.com</a>&nbsp;
                <br/>
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-mobile is-multiline">
          <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
            <div className="content">
              <h3>Recommended demos</h3>
              <hr/>
              <h5>Track and support adolescents under risk</h5>
              <p>
                User=adol-demo
                <br/>
                Password=password
              </p>

              <h5>Child growth monitoring</h5>
              <p>
                User=phulwari-demo
                <br/>
                Password=password
              </p>

              <h5>Data reporting of dam de-silting work</h5>
              <p>
                User=ddm-demo
                <br/>
                Password=password
              </p>
              <br/>
            </div>
          </div>
          <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
            <div className="content">
              <h3>Demo showcasing health modules</h3>
              <hr/>
              <h4>Cancer Screening</h4>
              <p>
                User=canscr-demo
                <br/>
                password=password
                <br/>
                <br/>
                <small>
                  <i>
                    <b>Note</b>: this one doesn't use smart forms (with skip logic etc),
                    since it was developed as a custom module but now the platform supports
                    all rules including smart forms for custom modules too
                  </i>
                </small>
              </p>
              <h4>Pregnancy, newborn and child growth</h4>
              <p>
                User=mch-demo
                <br/>
                Password=password
                <br/>
                <br/>
                <small>
                  <i>
                    <b>Note</b>: this one doesn't have visit scheduling and hence
                    My Dashboard is not useful in login
                  </i>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}
