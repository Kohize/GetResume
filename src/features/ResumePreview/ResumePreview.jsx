import NamePreview from '../../components/NamePreview/NamePreview';
import ContactsPreview from '../../components/ContactsPreview/ContactsPreview';
import SummaryPreview from '../../components/SummaryPreview/SummaryPreview';
import SkillsPreview from '../../components/SkillsPreview/SkillsPreview';
import ExperiencePreview from '../../components/ExperiencePreview/ExperiencePreview';
import EducationPreview from '../../components/EducationPreview/EducationPreview';

export default function ResumePreview() {
  return (
    <section className="bg-white rounded-lg grid grid-cols-2 h-fit ">
      <NamePreview />
      <ContactsPreview />
      <SummaryPreview />
      <SkillsPreview />
      <ExperiencePreview />
      <EducationPreview />
    </section>
  );
}
