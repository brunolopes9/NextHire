import React from "react"
import { employerFeatures, jobSeekerFeatures } from "../../../utils/data"

const Features = () => {
  return (
    <section className="">
      <div className="">
        <div className="">
          <h2 className="">
            Everything You Need to
            <span className="">Succeed</span>
          </h2>
          <p className="">
            Whether you're looking for your next opportunity or the perfect
            candidate, we have the tools and features to make it happen.
          </p>
        </div>

        <div className="">
          {/* Job Seekers Section */}
          <div>
            <div className="">
              <h3 className="">For Job Seekers</h3>
              <div className="" />
            </div>

            <div className="">
              {jobSeekerFeatures.map((feature, index) => (
                <div key={index} className="">
                  <div className="">
                    <feature.icon className="" />
                  </div>
                  <div>
                    <h4 className="">{feature.title}</h4>
                    <p className="">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employers Section*/}
          <div>
            <div className="">
              <h3 className="">For Employers</h3>
              <div className="" />
            </div>

            <div className="">
              {employerFeatures.map((feature, index) => (
                <div key={index} className="">
                  <div className="">
                    <feature.icon className="" />
                  </div>
                  <div>
                    <h4 className="">{feature.title}</h4>
                    <p className="">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
