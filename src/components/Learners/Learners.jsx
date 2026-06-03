import { SUCCESS_STORIES } from "../../data/siteContent";
import learner1 from "../../assets/logos/learner1.png";
import learner2 from "../../assets/logos/learner2.png";
import learner3 from "../../assets/logos/learner3.png";
import learner4 from "../../assets/logos/learner4.png";

const IMAGES = [learner1, learner2, learner3, learner4];

function Learners() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white" id="success-stories">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-3">
        Success Stories
      </h2>
      <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
        Real people. Real transformations. Every success story begins with a decision to invest in skills.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUCCESS_STORIES.map((story, i) => (
          <div
            key={story.title}
            className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition"
          >
            <img
              src={IMAGES[i]}
              alt={story.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">{story.title}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{story.before}</span>
                <span className="text-emerald-600 font-bold">→</span>
                <span className="text-emerald-700 font-bold">{story.after}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Learners;
