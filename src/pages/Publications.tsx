import Contact from "../components/Contact";

const articles = [
  {
    number: "01",
    title: "IoT-based COVID-19 Suspect Smart Entrance Monitoring System",
    authors:
      "Indra Prosad Roy, Mostafizur Rahman, Mahdi Hasan, Md. Shohrab Hossain",
    description:
      "Abstract: The concept of the Internet of Things (IoT) encompasses the connection and monitoring of various remote objects in the real world through the Internet. The COVID-19 is very infectious, and it spreads super-fast by contacting other COVID infected people. There have been few works on COVID detection and prevention in resent time. However, none of the existing works proposed any automatic IoT-based remote blocking system so our work is an autonomous system to stop entering in the campus the COVID suspected. The aim of this work is to detect COVID-19 suspect people and stop them from contacting other people. The proposed system is implemented by using IoT devices. The proposed system first measures the body temperature and Second measures blood oxygen level checks whether it exceeds the World Health Organization (WHO) recommended body temperature and blood oxygen level. In case of high body temperature or low blood oxygen level, the system blocks the person from entering the campus and sends an email to the suspected people notifying their illness. The most advantage of our system is working autonomously, cost-effective, and easy to implement on any campus or office.",
    doi: "10.1109/I-SMAC52330.2021.9641016",
  },
  {
    number: "02",
    title:
      "A Comparative Study of Different Segmentation and Regression Models for Fetal Head Circumference Measurement",
    authors:
      "Pathik Ahmed; Md. Salah Uddin Yusuf; Sowmik Sarker; Abdullahi Chowdhury; Angkita Bhowmik; Faria Rahman",
    description:
      "Abstract: Constant fetal health monitoring during pregnancy becomes crucial in assessing and diagnosing natural fetal growth. Out of all the methods, the ultrasound imaging-based approach for fetal aspect measurement is quite commonly used in modern days. An extensive comparative approach of various regression and segmentation models has been taken in this paper in the measurement of fetal head circumference. This research focuses on optimal model selection out of CNN regression models and segmentation models. Out-of-regression CNN models ResNet-50, InceptionV3, EfficientNet, and out-of-segmentation models U- net and Attention-Unet have been considered and implemented. Utilizing evaluation matrices such as MAE, RMSE, accuracy, and standard deviation for comparative analysis, the model designs were examined. This research work was carried out on the public dataset named HC-18 containing 805 multi-scaled ultrasound images. With room for improvement in this research work, it is highly evident that Inception V3 performed the best having an accuracy of about 87.04% whereas U-net performed the worst, having an accuracy of about 73.85%",
    doi: "10.1109/ic-ETITE58242.2024.10493596",
  },
  {
    number: "03",
    title:
      "An IoT-based Smart Grid Technology: Bidirectional Power Flow, Smart Energy Metering, and Home Automation",
    authors:
      "Pathik Ahmed; Md. Salah Uddin Yusuf; Sowmik Sarker; Abdullahi Chowdhury; Angkita Bhowmik; Faria Rahman",
    description:
      "Abstract: Constant fetal health monitoring during pregnancy becomes crucial in assessing and diagnosing natural fetal growth. Out of all the methods, the ultrasound imaging-based approach for fetal aspect measurement is quite commonly used in modern days. An extensive comparative approach of various regression and segmentation models has been taken in this paper in the measurement of fetal head circumference. This research focuses on optimal model selection out of CNN regression models and segmentation models. Out-of-regression CNN models ResNet-50, InceptionV3, EfficientNet, and out-of-segmentation models U- net and Attention-Unet have been considered and implemented. Utilizing evaluation matrices such as MAE, RMSE, accuracy, and standard deviation for comparative analysis, the model designs were examined. This research work was carried out on the public dataset named HC-18 containing 805 multi-scaled ultrasound images. With room for improvement in this research work, it is highly evident that Inception V3 performed the best having an accuracy of about 87.04% whereas U-net performed the worst, having an accuracy of about 73.85%.",
    doi: "10.1109/ic-ETITE58242.2024.10493596",
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200" />

          {/* Title Section */}
          <div className="border-b-2 border-gray-200">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 max-w-4xl pl-8 pb-12">
              Research & <br className="hidden md:block" />
              Publications
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-8 py-12">
            {/* Left Section - Empty */}
            <div className="col-span-12 md:col-span-5"></div>

            {/* Right Section - Description */}
            <div className="col-span-12 md:col-span-7">
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                We’re Qourin , partner of forward-thinking tech leaders around
                the globe. For more than 2 years, we’ve equipped the world’s
                fastest-growing companies with best-in-class engineering talent.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop"
              alt="Publications and Research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Empty Left Space */}
          <div className="col-span-12 md:col-span-5"></div>

          {/* Right Side - Title and Description */}
          <div className="col-span-12 md:col-span-7">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                How we work
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                From the initial concept to execution, we meticulously test and
                iterate at each phase of our software development process. This
                rigorous approach makes it possible for us to deliver just what
                you need, at the pace that you need it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-[#008080] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          {/* Articles Grid */}
          <div className="space-y-0 divide-y-2 divide-white/20">
            {articles.map((article) => (
              <div key={article.number} className="py-20">
                <div className="grid grid-cols-12 gap-8">
                  {/* Number and Title */}
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex flex-col">
                      <span className="text-7xl font-light text-white/70 mb-6">
                        {article.number}
                      </span>
                      <h3 className="text-2xl font-light text-white">
                        {article.title}
                      </h3>
                      <p className="mt-4 text-sm text-white/70">
                        {article.authors}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-9">
                    <div className="space-y-6">
                      <p className="text-white/90 font-light leading-relaxed">
                        {article.description}
                      </p>
                      {article.doi && (
                        <p className="text-sm text-white/70">
                          DOI:{" "}
                          <a
                            href={`https://doi.org/${article.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                          >
                            {article.doi}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Publications;
