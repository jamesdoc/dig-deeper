import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})

export class StudyPage implements OnInit {
  private data: {
    publish_date: string;
    title: string;
    passage_ref: string;
    passage_text: string[];
    text_content: {
      prayer_intro: string;
      body: string[];
      prayer_outro: string
    };
    video_url: string;
    audio_url: string;
    author: { first_name: string; last_name: string; title: string; avatar: string }
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.data = {
        "publish_date": "2019-01-14",
        "title": "Two Gospels",
        "passage_ref": "2 Timothy 1:1-11",
        "passage_text": [
            "Paul, an apostle of Christ Jesus by the will of God according to the promise of the life that is in Christ Jesus,",
            "To Timothy, my beloved child:",
            "Grace, mercy, and peace from God the Father and Christ Jesus our Lord.",
            "I thank God whom I serve, as did my ancestors, with a clear conscience, as I remember you constantly in my prayers night and day. As I remember your tears, I long to see you, that I may be filled with joy. I am reminded of your sincere faith, a faith that dwelt first in your grandmother Lois and your mother Eunice and now, I am sure, dwells in you as well. For this reason I remind you to fan into flame the gift of God, which is in you through the laying on of my hands, for God gave us a spirit not of fear but of power and love and self-control.",
            "Therefore do not be ashamed of the testimony about our Lord, nor of me his prisoner, but share in suffering for the gospel by the power of God, who saved us and called us to a holy calling, not because of our works but because of his own purpose and grace, which he gave us in Christ Jesus before the ages began, and which now has been manifested through the appearing of our Savior Christ Jesus, who abolished death and brought life and immortality to light through the gospel, for which I was appointed a preacher and apostle and teacher,",
        ],
        "text_content": {
            "prayer_intro": "Thank you Heavenly Father that you are the speaking God. Thank you that what you have breathed out will equip us to live as your servants today. So please teach us, rebuke us, correct us, and train us in righteousness for Jesus’ sake, Amen.",
            "body": [
                "2 Timothy is one of three letters that Paul wrote as a pastor to a pastor. This is Paul to Timothy. It’s really helpful to read it to discover what are Paul's priorities for a church minister. Back in Acts chapter 20 Paul had left those who are leading the church in Ephesus and he warned them of what might happen in the days, years to come.",
                "He said that, ‘I know that after my departure fierce wolves will come in among you not sparing the flock, and from among your own selves will arise men speaking twisted things to draw away the disciples after him.’ By the time Paul writes his first letter to Timothy it has already happened. That from among the leaders in the church there, some had arisen and they were teaching different doctrines. What they were doing Acts 20 warns us, is speaking twisted things or distorting the truth, misusing Bible words and Bible language to teach something that the Bible doesn't teach. And it's clear in both 1 Timothy and also in 2 Timothy that they are teachers in the church, using Bible language but what they are teaching is not the Bible.",
                "I’ve got to be careful how I say this but it is just worth noticing that Bible teaching is not enough. That is actually what they were doing. It is Bible teaching of what the Bible teaches that's what we want. Not just using Bible language to teach what the Bible doesn't teach.",
                "And in 2 Timothy 2:18 we discover what they were teaching and the way in which they had swerved from the truth. Because in fact they were saying that the Resurrection has already happened. They weren’t denying that the Resurrection is a real event, it does happen, but the key in what they were teaching is that the Resurrection had already happened.",
                "Where we used to live in Nottingham there was a place nearby that had a whole load of stuffed animals that you could go and see. We used to take our children there and then our grandchildren there to look at them. They look like real lions and tigers but all the innards have been removed from these animals. They weren't any longer real lions or tigers. And it seems that is similar to what these guys were doing in Ephesus, these other leaders. They had taken the word ‘resurrection’, and they had taken out all the innards of that word and stuffed it with something different. It sounds real but inside it was very different, they had remove the vital parts of the resurrection and stuffed the word with Heresy. But you see they are still using the word Resurrection. The Resurrection has already happened.",
                "And the point as we begin in 2 Timothy today is that there were two gospels in Ephesus, two versions of the truth and this is the first one, it gets described in 2:18, that the Resurrection has already happened and all of our future hope they were saying had been collapsed into the here and now. Or perhaps that we may think what is promise to us for heaven for the future, they were saying could be enjoyed in our present experience. So perhaps they were saying things like we can't be sick as Christians that is physically impossible because with Jesus’ wounds we are healed. Or they might have been saying the Christian who sins is a sub Christian because we've been given a new nature we are a new creation the old has gone in other words the Resurrection has already happened.",
                "A few years ago a friend of mine was at a Christian town-wide youth rally he had taken all his youth group along with him. And he said that the message that was presented from the front went something like this, Do you realise how much Jesus wants to help everyone? He wants to pour out his amazing love on us all. With Jesus life will be easier and all have problems will disappear.’",
                "My friend wrote down afterwards, ‘I imagined a hoard of happy teenagers, leaving the event having been caressed by a false Jesus, and then suddenly rejecting Christ as soon as any trouble came their way.‘",
                "My friend was really cross he said, ‘it was the worst sort of man centred evangelism, pernicious and heartless. And can you see that's a sort of version of the Resurrection has already happened. It is an already gospel.",
                "But in contrast to that Paul talks about his gospel, the true gospel. In 1:10 he describes it as a gospel in which death is abolished and life and immortality are brought to light. But the key difference between his gospel and the distorters is a little phrase that came right at the beginning of our reading this morning. Paul an apostle of Christ Jesus by the will of God according to the promise of the life that is in Christ Jesus. Life for sure. Extraordinary Resurrection Life for sure, but the promise of it, the promise of Life. Rather than what they were saying the already gospel.",
                "The New Testament gospel is not so much about ‘O Jesus I Have Promised,’ in other words what I have promised to him, but what God has promised to us for the future.",
                "There we have it then in Ephesus these two gospels, the already gospel, and the promised gospel. This distorted gospel says Christianity has everything you want for now. Oh and by the way it just continues for a bit longer in heaven. Or the New Testament gospel that death is conquered and heaven is coming, and yes it's good to be a Christian now, but the future is Glorious and Wonderful, it's about great expectations not great experiences.",
                "How important it is that we understand the gospel. That we believe and trust in as a gospel of Resurrection Life but a promise gospel. The promise of life that is in Christ Jesus. Let's not play down how wonderful it is that death is abolished through the gospel of the Lord Jesus, and life and immortality are brought light through the gospel. But let us have a clear view of what is already and what is promised. Let us hold firmly to the promise of life.",
                "Let’s pray that we will do that today"
            ],
            "prayer_outro": "Our Father God we thank you so much for the promise of life that is in the Gospel of the Lord Jesus Christ. Please help us today to hold firm to that true gospel. We ask it in Jesus name, amen."
        },
        "video_url": "http://localhost:8080/video/w1d1.mp4",
        "audio_url": "http://localhost:8080/audio/w1d1.mp3",
        "author": {
            "first_name": "Nigel",
            "last_name": "Styles",
            "title": "Nigel is the Director of Cornhill at The Proclamation Trust",
            "avatar": "…"
        }
    };
  }

  markAsComplete() {
    console.log('TODO: Register study as complete');
    this.router.navigateByUrl('/');
  }

}
