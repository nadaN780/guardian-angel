import Card from "@/components/Card"

export default function Home() {
  return (
    <>
    <div className="relative w-full h-[100vh]">
        <video autoPlay muted loop id="myVideo" className="absolute inset-0 z-10">
            <source src="/video_2023-09-03_16-01-20.mp4" type="video/mp4" />
        </video>
        <div className="z-20 absolute inset-0 bg-black/25" />
        <div className="grid place-items-center absolute inset-0 z-30">
            <p className="flex items-center justify-center text-center font-bold text-xl sm:text-3xl p-12">نحن موقع يولي اهتماماً كبيراً بتوعية المجتمع حول المشاكل النفسية والعقلية. نسعى لمساعدة كل من يرغب في تقديم الدعم لشخص مقرب يعاني من مشكلة، ولكنه لا يعرف الطريقة المناسبة. 
                هنا، نقدم الارشاد اللازم ليتمكن الشخص من تقديم المساعدة بأفضل طريقة ممكنة دون أن يزيد من الضغط على المصاب ويسبب له المزيد من الضيق.</p>
        </div>
    </div>
   

    <section className="mental-health-conditions">
        <div className="container-conditions">

            <h2 className="section-heading">الاضطرابات النفسيه الاكثر شيوعا</h2>

            <div className="conditions-list">
                <div className="condition flex flex-col justify-between condition-one">
                    <h3 className="condition-title">الاكتئاب</h3>
                    <img src="/assets/depression.webp" alt="Depression" />
                    <p className="condition-description">في عام 2019، كان هناك 280 مليون شخص مصابين 
                        بالاكتئاب، منهم 23 مليون طفل ومراهق . ويختلف الاكتئاب 
                        عن تقلبات المزاج المعتادة والانفعالات العابرة إزاء تحديات 
                        الحياة اليومية. وخلال نوبة الاكتئاب، يعاني المكتئب 
                        من تكدّر المزاج (الشعور بالحزن وسرعة الغضب والخواء)
                         أو فقدان المتعة أو الاهتمام بالأنشطة، في معظم الأوقات،
                         وكل يوم تقريباً، لمدة أسبوعين على الأقل. وقد تظهر عليه 
                        أيضاً أعراض أخرى عديدة منها ضعف التركيز، أو الإفراط في 
                        الشعور بالذنب أو ضعف تقدير الذات، أو اليأس من المستقبل،
                         أو التفكير في الموت أو الانتحار، أو اضطراب النوم،
                         أو تقلبات الشهية أو الوزن، والشعور بالتعب أو فتور 
                        الطاقة أكثر من العادة. والمصابون بالاكتئاب معرضون لخطر 
                        الانتحار بشكل متزايد، ولكن يوجد علاج نفسي فعال، وقد يُنظر أيضاً في أخذ الأدوية رهناً بعمر الفرد ووخامة حالته..</p>
                    <a target="_blank" href="https://www.who.int/ar/news-room/fact-sheets/detail/depression" className="button button-secondary flex w-full">اعرف  اكثر</a>
                </div>
                <div className="condition">
                    <h3 className="condition-title condition-two">اضطراب القلق العام</h3>
                    <img src="/assets/OIP.jpg" alt="Anxiety" />
                    <p className="condition-description">في عام 2019، كان هناك 301 مليون شخص مصابين باضطراب
                         القلق، منهم 58 مليون طفل 
                         ومراهق . وتتميز اضطرابات القلق بمشاعر الخوف المفرط والقلق والاضطرابات السلوكية ذات
                          الصلة، وتكون أعراضها وخيمة بما يكفي لتسبب كرباً شديداً أو قصور جسيم في الأداء. وهناك عدة 
                         أنواع مختلفة من اضطرابات القلق، من بينها:  اضطراب القلق العام (المميز بالقلق المفرط)،
                          واضطراب الهلع (المميز بنوبات الهلع)، واضطراب القلق المجتمعي (المميز بالخوف المفرط و
                         القلق في المواقف الاجتماعية)، واضطراب القلق الانفصالي (المميز بالخوف أو القلق المفرط
                          بشأن الانفصال عن الأفراد الذين تربطهم بالشخص رابطة عاطفية عميقة)، وغيرها من الأنواع
                         . ويوجد علاج نفسي فعال، وقد يُنظر أيضاً في إعطاء الأدوية رهناً بعمر الفرد ووخامة حالته..</p>
                    <a target="_blank" href="https://psychcentral.com/anxiety" className="button button-secondary">اعرف اكثر</a>
                </div>
                <div className="condition flex flex-col justify-between">
                    <h3 className="condition-title condition-three">اضطراب ثنائي القطب </h3>
                    <img src="/assets/bipolar.webp" alt="Bipolar" />
                    <p className="condition-description">في عام 2019، كان هناك 40 مليون شخص يعانون من الاضطراب 
                        الثنائي القطب . ويعاني المصابون بهذا الاضطراب من نوبات اكتئاب 
                        متعاقبة تقترن بفترات من أعراض الهوس. وخلال نوبة الاكتئاب، يعاني المكتئب من تكدّر 
                        المزاج (الشعور بالحزن وسرعة الغضب والخواء) أو فقدان المتعة أو الاهتمام بالأنشطة
                        ، في معظم الأوقات، وكل يوم تقريباً. وقد تشمل أعراض الهوس النشوة أو سرعة الانفعال، 
                        وزيادة النشاط أو الطاقة، وأعراض أخرى مثل زيادة الثرثرة، وتسارع الأفكار،
                         وزيادة تقدير الذات، ونقصان الحاجة إلى النوم، وسهولة فقدان التركيز،
                         والسلوك المندفع والطائش. والمصابون بالاكتئاب الثنائي القطب معرضون
                         لزيادة خطر الانتحار، ولكن يوجد خيارات علاج فعالة تشمل التثقيف 
                        النفسي والحد من التوتر وتعزيز الأداء الاجتماعي وأخذ الأدوية..</p>
                    <a target="_blank" href="https://psychcentral.com/program/shining-a-light-on-bipolar-disorder" className="button button-secondary flex w-full">اعرف اكثر</a>
                </div>
            </div>
        </div>
    </section>

    <section className="self-care">
        <div className="container self-contain">
            <h2 className="section-heading">العناية بالنفس</h2>
            <div className="self-care-grid">
                <div className="self-care-item">
                    <img src="/assets/relaxTest-min.jpg" alt="Relaxation" loading="lazy"/>
                    <h3 className="self-care-item-title">تقنيات الاسترخاء </h3>
                    <p className="self-care-item-description">تعلم تقنيات الاسترخاء البسيطة لمساعدتك على تقليل 
                        التوتر والقلق، مثل التنفس العميق واسترخاء العضلات التدريجي والتخيل الموجه..</p>
                    <a target="_blank" href="https://www.mayoclinic.org/ar/healthy-lifestyle/stress-management/in-depth/relaxation-technique/art-20045368" className="button button-primary">قراءة المزيد </a>
                </div>
                <div className="self-care-item">
                    <img src="/assets/exercise-min.jpg" alt="Exercise" loading="lazy"/>
                    <h3 className="self-care-item-title">التمرن</h3>
                    <p className="self-care-item-description">اكتشف كيف يمكن للتمرين أن يحسن صحتك العقلية ورفاهيتك،
                         واستكشف أنواعًا مختلفة من التمارين، بدءًا من اليوجا والبيلاتس وحتى الجري ورفع الأثقال..</p>
                        <a target="_blank" href="https://www.mayoclinic.org/ar/healthy-lifestyle/stress-management/in-depth/exercise-and-stress/art-20044469" className="button button-primary">قراءة المزيد </a>
                    </div>
                <div className="self-care-item">
                    <img src="/assets/mindfullness-min.jpg" alt="Mindfulness" loading="lazy"/>
                    <h3 className="self-care-item-title"> اليقظة الذهنية </h3>
                    <p className="self-care-item-description">تعرف على فوائد اليقظة الذهنية، واكتشف الممارسات البسيطة
                         التي يمكنك دمجها في حياتك اليومية، مثل التنفس اليقظ، والأكل اليقظ، والتأمل في فحص الجسم..</p>
                        <a target="_blank" href="https://www.for9a.com/learn/%D9%81%D9%86-%D8%A7%D9%84%D9%8A%D9%82%D8%B8%D8%A9-%D8%A7%D9%84%D8%B0%D9%87%D9%86%D9%8A%D8%A9-Mindfulness" className="button button-primary">قراءة المزيد </a>
                    </div>
              </div>  
        </div>
    </section>

      <section className="flex flex-col gap-6 p-4 sm:p-8">
          <div className="w-full flex items-center justify-center">
            <h3 className="font-bold text-4xl">الدعم</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <Card color="blue" text="منظمة الصحة العالمية" href="https://www.who.int/ar/news-room/fact-sheets/detail/mental-health-strengthening-our-response" />
          <Card color="blue" text="الأمانة العامة للصحة النفسية وعلاج الادمان" href="https://nmhp.mohp.gov.eg/mentalworld/web/ar/about-us" />
          <Card color="blue" text="الجمعية المصرية للطب النفسي" href="http://www.epassociation.net/ar" />




            <Card color="red" text="الخط الساخن لنجدة من لديهم افكار انتحارية" href="tel:08008880700" />
            <Card color="red" text="الخط الساخن لنجدة الطفل" href="tel:16000" />
            <Card color="red" text="لتلفي الاستفسارات النفسية والدعم النفسي" href="tel:0220816831" />
            <Card color="green" text="الخط الساخن للمجلس القومي للصحة النفسية" href="tel:20818102" />
            <Card color="green" text="الخط الساخن لمكتب شكاوي المرأة" href="tel:15115" />
            <Card color="green" text="للتواصل مع أطباء الصحة النفسية" href="tel:16328" />

            
            
            




          </div>
      </section>
      
<iframe name="hidden_iframe" id="hidden_iframe" style={{display:"none"}} onload="if(submitted) {window.location='/';}"></iframe>
  
    <footer>
        
        <div className="container foot-contain">
            <div className="row">
                <div className="col-md-6 col-lg-4 form-contain">
                    <h3>تواصل معنا</h3>
                    <form action="https://docs.google.com/forms/d/e/1FAIpQLSc4rOhFdanshR-ERPGdNqDt-B5qn8d-2onsSKDm55jr1eCQ-w/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;">
                        <div className="form-group">
                            <input name="entry.1616669378" type="text" placeholder="الاسم" required />
                        </div>
                        <div className="form-group">
                            <input name="entry.1166736497" type="email" placeholder="البريد الالكتروني" required />
                        </div>
                        <div className="form-group">
                            <textarea name="entry.685362146" placeholder="الرسالة" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">ارسل</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="copy-right">
            <div className="col-md-12 col-lg-4 contact-contain">
                
                <p><i className="fas fa-phone-alt"></i>Copyright © 2023 aman . All rights reserved.</p>
            </div>
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
