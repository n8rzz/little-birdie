import { IFeed } from '../../shared/domain/feed/models/i-feed';

export const parsedRssMock: IFeed[] = [
  {
    description: "Statuspage",
    items: [
      {
        content: "\n<p><small>Mar <var data-var='date'>25</var>, <var data-var='time'>17:19</var> UTC</small><br><strong>Resolved</strong> - This incident has been resolved.</p><p><small>Mar <var data-var='date'>25</var>, <var data-var='time'>17:04</var> UTC</small><br><strong>Monitoring</strong> - A fix has been implemented and we are monitoring the results.</p><p><small>Mar <var data-var='date'>25</var>, <var data-var='time'>16:44</var> UTC</small><br><strong>Investigating</strong> - The team is currently investigating performance issues with Harvest and external service connections (Forecast, calendars, etc.). We will post a more detailed status update here as soon as possible.</p>      ",
        contentSnippet: "Mar 25, 17:19 UTCResolved - This incident has been resolved.Mar 25, 17:04 UTCMonitoring - A fix has been implemented and we are monitoring the results.Mar 25, 16:44 UTCInvestigating - The team is currently investigating performance issues with Harvest and external service connections (Forecast, calendars, etc.). We will post a more detailed status update here as soon as possible.",
        guid: "https://www.harveststatus.com/incidents/3pc80xqxbnh9",
        isoDate: "2020-03-25T17:19:06.000Z",
        link: "https://www.harveststatus.com/incidents/3pc80xqxbnh9",
        pubDate: "Wed, 25 Mar 2020 17:19:06 +0000",
        title: "Harvest Performance Issues"
      },
      {
        content: "\n<p><small>Jan <var data-var='date'> 8</var>, <var data-var='time'>14:51</var> UTC</small><br><strong>Resolved</strong> - This incident has been resolved.</p><p><small>Jan <var data-var='date'> 8</var>, <var data-var='time'>14:43</var> UTC</small><br><strong>Monitoring</strong> - We have resolved the issue from earlier. There should be no further issues impacting customers accessing Harvest from browser extensions, or mobile applications.  We continue to monitor the situation and will resolve this event shortly. Any customers still experiencing any issues accessing Harvest, please contact Harvest support at support@harvestapp.com. Sorry for the interruption!</p><p><small>Jan <var data-var='date'> 8</var>, <var data-var='time'>13:42</var> UTC</small><br><strong>Update</strong> - Updates to Harvest were rolled out this morning which are still causing some issues for customers accessing Harvest using browser extensions, and some mobile applications. Our team is working to implement a fix, and we thank you for your patience as we resolve this issue.</p><p><small>Jan <var data-var='date'> 8</var>, <var data-var='time'>13:11</var> UTC</small><br><strong>Identified</strong> - At this time we have restored access to the Harvest web application. Some remaining issues remain for customers accessing Harvest through Harvest for Mac, Harvest for iPhone, Harvest for Android, Harvest for Windows, and browser extensions. We are working on resolving these issues. We are very sorry for the trouble this morning.</p><p><small>Jan <var data-var='date'> 8</var>, <var data-var='time'>12:36</var> UTC</small><br><strong>Update</strong> - Sorry for the disruption. We are continuing to investigate intermittent problems accessing Harvest.</p><p><small>Jan <var data-var='date'> 8</var>, <var data-var='time'>12:20</var> UTC</small><br><strong>Investigating</strong> - We are investigating intermittent problems accessing Harvest.</p>      ",
        contentSnippet: "Jan  8, 14:51 UTCResolved - This incident has been resolved.Jan  8, 14:43 UTCMonitoring - We have resolved the issue from earlier. There should be no further issues impacting customers accessing Harvest from browser extensions, or mobile applications.  We continue to monitor the situation and will resolve this event shortly. Any customers still experiencing any issues accessing Harvest, please contact Harvest support at support@harvestapp.com. Sorry for the interruption!Jan  8, 13:42 UTCUpdate - Updates to Harvest were rolled out this morning which are still causing some issues for customers accessing Harvest using browser extensions, and some mobile applications. Our team is working to implement a fix, and we thank you for your patience as we resolve this issue.Jan  8, 13:11 UTCIdentified - At this time we have restored access to the Harvest web application. Some remaining issues remain for customers accessing Harvest through Harvest for Mac, Harvest for iPhone, Harvest for Android, Harvest for Windows, and browser extensions. We are working on resolving these issues. We are very sorry for the trouble this morning.Jan  8, 12:36 UTCUpdate - Sorry for the disruption. We are continuing to investigate intermittent problems accessing Harvest.Jan  8, 12:20 UTCInvestigating - We are investigating intermittent problems accessing Harvest.",
        guid: "https://www.harveststatus.com/incidents/0f07l5f8tzs1",
        isoDate: "2020-01-08T14:51:39.000Z",
        link: "https://www.harveststatus.com/incidents/0f07l5f8tzs1",
        pubDate: "Wed, 08 Jan 2020 14:51:39 +0000",
        title: "Trouble accessing Harvest"
      },
      {
        content: "\n<p><small>Oct <var data-var='date'>30</var>, <var data-var='time'>17:27</var> UTC</small><br><strong>Resolved</strong> - Around 20 minutes ago, an update was deployed which caused login issues for Harvest customers. The issue was immediately detected and a fix was deployed. Harvest customers were unable to login to their accounts for around 6 minutes. We are truly sorry for this interruption! Thank you for your patience and support as the issue was resolved. Customers still experiencing an issue: please get in contact with Harvest support at support@harvestapp.com.</p><p><small>Oct <var data-var='date'>30</var>, <var data-var='time'>17:12</var> UTC</small><br><strong>Monitoring</strong> - We have identified the issue, and a fix has been deployed. At this time the issue should be resolved and customers should have access to all services again. We are sorry for the inconvenience here, and thank you for your patience while we resolved the issue.</p><p><small>Oct <var data-var='date'>30</var>, <var data-var='time'>17:09</var> UTC</small><br><strong>Identified</strong> - We are investigating login issues affecting customers. So sorry for the interruption in service and will provide updates here as we resolve the issue.</p>      ",
        contentSnippet: "Oct 30, 17:27 UTCResolved - Around 20 minutes ago, an update was deployed which caused login issues for Harvest customers. The issue was immediately detected and a fix was deployed. Harvest customers were unable to login to their accounts for around 6 minutes. We are truly sorry for this interruption! Thank you for your patience and support as the issue was resolved. Customers still experiencing an issue: please get in contact with Harvest support at support@harvestapp.com.Oct 30, 17:12 UTCMonitoring - We have identified the issue, and a fix has been deployed. At this time the issue should be resolved and customers should have access to all services again. We are sorry for the inconvenience here, and thank you for your patience while we resolved the issue.Oct 30, 17:09 UTCIdentified - We are investigating login issues affecting customers. So sorry for the interruption in service and will provide updates here as we resolve the issue.",
        guid: "https://www.harveststatus.com/incidents/zs3pxltryfr6",
        isoDate: "2019-10-30T17:27:26.000Z",
        link: "https://www.harveststatus.com/incidents/zs3pxltryfr6",
        pubDate: "Wed, 30 Oct 2019 17:27:26 +0000",
        title: "Login issues"
      },
      {
        content: "\n<p><small>May <var data-var='date'>24</var>, <var data-var='time'>19:30</var> UTC</small><br><strong>Resolved</strong> - We have restored our systems to full capacity after the issue which affected customers earlier today. We don't expect any further issues at this time. Thank you for your patience while we resolved this issue.</p><p><small>May <var data-var='date'>24</var>, <var data-var='time'>15:44</var> UTC</small><br><strong>Update</strong> - We are continuing to monitor for any further issues.</p><p><small>May <var data-var='date'>24</var>, <var data-var='time'>15:35</var> UTC</small><br><strong>Monitoring</strong> - We have stabilized all systems at this time, and customers should no longer be impacted by the issue from earlier. We are working to restore all systems to full capacity and will keep you updated of the progress. We are truly sorry for this inconvenience.</p><p><small>May <var data-var='date'>24</var>, <var data-var='time'>15:09</var> UTC</small><br><strong>Update</strong> - We are very sorry for the current issue affecting Harvest customers. At this time the team is evaluating options for restoring full system performance. We will keep you updated on progress. Thank you for your patience.</p><p><small>May <var data-var='date'>24</var>, <var data-var='time'>14:49</var> UTC</small><br><strong>Update</strong> - We are continuing to investigate the cause of the issue that is affecting Harvest customers. Very sorry for the inconvenience.</p><p><small>May <var data-var='date'>24</var>, <var data-var='time'>14:36</var> UTC</small><br><strong>Investigating</strong> - We are currently investigating the cause of a system performance issue that is impacting some customers.</p>      ",
        contentSnippet: "May 24, 19:30 UTCResolved - We have restored our systems to full capacity after the issue which affected customers earlier today. We don't expect any further issues at this time. Thank you for your patience while we resolved this issue.May 24, 15:44 UTCUpdate - We are continuing to monitor for any further issues.May 24, 15:35 UTCMonitoring - We have stabilized all systems at this time, and customers should no longer be impacted by the issue from earlier. We are working to restore all systems to full capacity and will keep you updated of the progress. We are truly sorry for this inconvenience.May 24, 15:09 UTCUpdate - We are very sorry for the current issue affecting Harvest customers. At this time the team is evaluating options for restoring full system performance. We will keep you updated on progress. Thank you for your patience.May 24, 14:49 UTCUpdate - We are continuing to investigate the cause of the issue that is affecting Harvest customers. Very sorry for the inconvenience.May 24, 14:36 UTCInvestigating - We are currently investigating the cause of a system performance issue that is impacting some customers.",
        guid: "https://www.harveststatus.com/incidents/bt4jxlms9bt2",
        isoDate: "2019-05-24T19:30:07.000Z",
        link: "https://www.harveststatus.com/incidents/bt4jxlms9bt2",
        pubDate: "Fri, 24 May 2019 19:30:07 +0000",
        title: "System performance issue"
      },
      {
        content: "\n<p><small>Feb <var data-var='date'>26</var>, <var data-var='time'>15:58</var> UTC</small><br><strong>Resolved</strong> - The load balancer has been fully restored, and no further issues should be impacting any customers. Thank you for your patience during the short window of service issues earlier today.</p><p><small>Feb <var data-var='date'>26</var>, <var data-var='time'>15:03</var> UTC</small><br><strong>Monitoring</strong> - We have identified a load balancer which had a hardware failure, and was incorrectly processing a percentage of customer requests for a few minutes earlier this morning. This load balancer has been removed from production, and there should be no further impact to customers at this time. Thank you for your patience while we resolve the underlying issue.</p><p><small>Feb <var data-var='date'>26</var>, <var data-var='time'>14:41</var> UTC</small><br><strong>Investigating</strong> - We are investigating a system issue which might be impacting some customers at this time. We are sorry for the inconvenience and will post updates here as soon as we can. Thank you for your patience.</p>      ",
        contentSnippet: "Feb 26, 15:58 UTCResolved - The load balancer has been fully restored, and no further issues should be impacting any customers. Thank you for your patience during the short window of service issues earlier today.Feb 26, 15:03 UTCMonitoring - We have identified a load balancer which had a hardware failure, and was incorrectly processing a percentage of customer requests for a few minutes earlier this morning. This load balancer has been removed from production, and there should be no further impact to customers at this time. Thank you for your patience while we resolve the underlying issue.Feb 26, 14:41 UTCInvestigating - We are investigating a system issue which might be impacting some customers at this time. We are sorry for the inconvenience and will post updates here as soon as we can. Thank you for your patience.",
        guid: "https://www.harveststatus.com/incidents/scrtyckw56vw",
        isoDate: "2019-02-26T15:58:56.000Z",
        link: "https://www.harveststatus.com/incidents/scrtyckw56vw",
        pubDate: "Tue, 26 Feb 2019 15:58:56 +0000",
        title: "System issue"
      }
    ],
    link: "https://www.harveststatus.com",
    pubDate: "Sat, 04 Apr 2020 08:07:42 +0000",
    title: "Harvest Status - Incident History",
    name: 'Harvest'
  },
  {
    description: "Statuspage",
    items: [
      {
        content: "\n<p><small>Apr <var data-var='date'> 4</var>, <var data-var='time'>00:13</var> EDT</small><br><strong>Resolved</strong> - This incident has been resolved.</p><p><small>Apr <var data-var='date'> 4</var>, <var data-var='time'>00:03</var> EDT</small><br><strong>Monitoring</strong> - A fix has been deployed. We will continue to monitor FreshBooks Payments to ensure systems are operating correctly.</p><p><small>Apr <var data-var='date'> 3</var>, <var data-var='time'>23:26</var> EDT</small><br><strong>Identified</strong> - We have identified the issue and teams are evaluating remediation options.</p><p><small>Apr <var data-var='date'> 3</var>, <var data-var='time'>23:19</var> EDT</small><br><strong>Investigating</strong> - We are currently investigating an issue with FreshBooks Payments. This may affect access to payment options and some invoice may be unable to use FreshBooks Payments.</p>      ",
        contentSnippet: "Apr  4, 00:13 EDTResolved - This incident has been resolved.Apr  4, 00:03 EDTMonitoring - A fix has been deployed. We will continue to monitor FreshBooks Payments to ensure systems are operating correctly.Apr  3, 23:26 EDTIdentified - We have identified the issue and teams are evaluating remediation options.Apr  3, 23:19 EDTInvestigating - We are currently investigating an issue with FreshBooks Payments. This may affect access to payment options and some invoice may be unable to use FreshBooks Payments.",
        guid: "https://status.freshbooks.com/incidents/3zn9hb9xj23n",
        isoDate: "2020-04-04T04:13:57.000Z",
        link: "https://status.freshbooks.com/incidents/3zn9hb9xj23n",
        pubDate: "Sat, 04 Apr 2020 00:13:57 -0400",
        title: "FreshBooks Payments may be unavailable."
      },
      {
        content: "\n<p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>19:49</var> EDT</small><br><strong>Resolved</strong> - We have resolved the issue impacting FreshBooks Classic Search and PDF endpoints. Thank you for your patience while we worked to fix the issue.</p><p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>19:14</var> EDT</small><br><strong>Monitoring</strong> - We have fixed the issue impacting FreshBooks Classic Search and PDF, and will continue to monitor it to ensure there’s no further downtime. Feel free to check back here for any further updates.</p><p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>17:14</var> EDT</small><br><strong>Identified</strong> - The issue has been identified and a fix is being implemented.</p><p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>16:13</var> EDT</small><br><strong>Update</strong> - We are continuing to investigate this issue.</p><p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>16:03</var> EDT</small><br><strong>Update</strong> - FreshBooks Classic and New FreshBooks is currently down, and our team is working hard to get it back up and running. We will post updates as soon as we have them.</p><p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>16:03</var> EDT</small><br><strong>Update</strong> - FreshBooks is currently down, and our team is working hard to get it back up and running. We will post updates as soon as we have them.</p><p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>15:40</var> EDT</small><br><strong>Investigating</strong> - There’s currently an issue with Search and PDF endpoints on FreshBooks Classic. We’ve identified the problem and are working to fix it, however you may notice performance issues with our Search and PDF endpoints at this time. Please check back for further updates.</p>      ",
        contentSnippet: "Mar 31, 19:49 EDTResolved - We have resolved the issue impacting FreshBooks Classic Search and PDF endpoints. Thank you for your patience while we worked to fix the issue.Mar 31, 19:14 EDTMonitoring - We have fixed the issue impacting FreshBooks Classic Search and PDF, and will continue to monitor it to ensure there’s no further downtime. Feel free to check back here for any further updates.Mar 31, 17:14 EDTIdentified - The issue has been identified and a fix is being implemented.Mar 31, 16:13 EDTUpdate - We are continuing to investigate this issue.Mar 31, 16:03 EDTUpdate - FreshBooks Classic and New FreshBooks is currently down, and our team is working hard to get it back up and running. We will post updates as soon as we have them.Mar 31, 16:03 EDTUpdate - FreshBooks is currently down, and our team is working hard to get it back up and running. We will post updates as soon as we have them.Mar 31, 15:40 EDTInvestigating - There’s currently an issue with Search and PDF endpoints on FreshBooks Classic. We’ve identified the problem and are working to fix it, however you may notice performance issues with our Search and PDF endpoints at this time. Please check back for further updates.",
        guid: "https://status.freshbooks.com/incidents/r3dd21785x34",
        isoDate: "2020-03-31T23:49:08.000Z",
        link: "https://status.freshbooks.com/incidents/r3dd21785x34",
        pubDate: "Tue, 31 Mar 2020 19:49:08 -0400",
        title: "FreshBooks Classic - Degraded Performance"
      },
      {
        content: "\n<p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>13:35</var> EDT</small><br><strong>Resolved</strong> - We have resolved the issue impacting FreshBooks Classic and New FreshBooks. Thank you for your patience while we worked to fix the issue. Check back here for any further updates.</p><p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>13:14</var> EDT</small><br><strong>Investigating</strong> - FreshBooks Classic and New FreshBooks is currently down, and our team is working hard to get it back up and running. We will post updates as soon as we have them.</p>      ",
        contentSnippet: "Mar 31, 13:35 EDTResolved - We have resolved the issue impacting FreshBooks Classic and New FreshBooks. Thank you for your patience while we worked to fix the issue. Check back here for any further updates.Mar 31, 13:14 EDTInvestigating - FreshBooks Classic and New FreshBooks is currently down, and our team is working hard to get it back up and running. We will post updates as soon as we have them.",
        guid: "https://status.freshbooks.com/incidents/vjhc60sqj562",
        isoDate: "2020-03-31T17:35:58.000Z",
        link: "https://status.freshbooks.com/incidents/vjhc60sqj562",
        pubDate: "Tue, 31 Mar 2020 13:35:58 -0400",
        title: "FreshBooks Classic and New FreshBooks - Down"
      },
    ],
    link: "https://status.freshbooks.com",
    pubDate: "Sat, 04 Apr 2020 04:06:15 -0400",
    title: "FreshBooks Status - Incident History",
    name: 'Freshbooks'
  },
  {
    description: "Statuspage",
    items: [
      {
        content: "\n<p><small>Apr <var data-var='date'> 2</var>, <var data-var='time'>22:36</var> UTC</small><br><strong>Resolved</strong> - The rollback was completed successfully at 21:55 UTC and we confirmed with our enterprise customers that this has fixed their issues.</p><p><small>Apr <var data-var='date'> 2</var>, <var data-var='time'>21:37</var> UTC</small><br><strong>Update</strong> - We are continuing to work on a fix for this issue. Our internal monitoring and logging systems have provided us further data about the root cause. Thank you for your patience as our engineers revert the change to get the clusters back up and running ASAP.</p><p><small>Apr <var data-var='date'> 2</var>, <var data-var='time'>21:10</var> UTC</small><br><strong>Identified</strong> - We noticed some npm enterprise customers have experienced 404 errors while performing operations with their registries. We immediately moved to fix for this problem and you should see improvements within the next few minutes.</p>      ",
        contentSnippet: "Apr  2, 22:36 UTCResolved - The rollback was completed successfully at 21:55 UTC and we confirmed with our enterprise customers that this has fixed their issues.Apr  2, 21:37 UTCUpdate - We are continuing to work on a fix for this issue. Our internal monitoring and logging systems have provided us further data about the root cause. Thank you for your patience as our engineers revert the change to get the clusters back up and running ASAP.Apr  2, 21:10 UTCIdentified - We noticed some npm enterprise customers have experienced 404 errors while performing operations with their registries. We immediately moved to fix for this problem and you should see improvements within the next few minutes.",
        guid: "https://status.npmjs.org/incidents/dh3jf0896d2t",
        isoDate: "2020-04-02T22:36:31.000Z",
        link: "https://status.npmjs.org/incidents/dh3jf0896d2t",
        pubDate: "Thu, 02 Apr 2020 22:36:31 +0000",
        title: "npm enterprise 404 errors"
      },
      {
        content: "\n<p><small>Apr <var data-var='date'> 1</var>, <var data-var='time'>21:28</var> UTC</small><br><strong>Resolved</strong> - Our CDN partner has investigated and confirmed the issue we experienced earlier has been resolved.</p><p><small>Apr <var data-var='date'> 1</var>, <var data-var='time'>19:51</var> UTC</small><br><strong>Monitoring</strong> - We experienced a short interruption in npm service from 19:32 to 19:37 UTC which we traced to problems with our content delivery network partners. We're monitoring the situation.</p>      ",
        contentSnippet: "Apr  1, 21:28 UTCResolved - Our CDN partner has investigated and confirmed the issue we experienced earlier has been resolved.Apr  1, 19:51 UTCMonitoring - We experienced a short interruption in npm service from 19:32 to 19:37 UTC which we traced to problems with our content delivery network partners. We're monitoring the situation.",
        guid: "https://status.npmjs.org/incidents/vbk8n3kd82gz",
        isoDate: "2020-04-01T21:28:01.000Z",
        link: "https://status.npmjs.org/incidents/vbk8n3kd82gz",
        pubDate: "Wed, 01 Apr 2020 21:28:01 +0000",
        title: "CDN Issues"
      },
    ],
    link: "https://status.npmjs.org",
    pubDate: "Sat, 04 Apr 2020 08:05:35 +0000",
    title: "npm, Inc. Status - Incident History",
    name: 'Npm'
  },
  {
    description: "Statuspage",
    items: [
      {
        content: "\n<p><small>Apr <var data-var='date'> 2</var>, <var data-var='time'>21:55</var> UTC</small><br><strong>Resolved</strong> - This incident has been resolved.</p><p><small>Apr <var data-var='date'> 2</var>, <var data-var='time'>21:06</var> UTC</small><br><strong>Update</strong> - We have rolled out a fix and are monitoring recovery.</p><p><small>Apr <var data-var='date'> 2</var>, <var data-var='time'>20:50</var> UTC</small><br><strong>Update</strong> - We continue to investigate elevated errors and timeouts across GitHub services</p><p><small>Apr <var data-var='date'> 2</var>, <var data-var='time'>20:26</var> UTC</small><br><strong>Update</strong> - We are investigating reports of service unavailability.</p><p><small>Apr <var data-var='date'> 2</var>, <var data-var='time'>20:20</var> UTC</small><br><strong>Investigating</strong> - We are investigating reports of degraded performance.</p>      ",
        contentSnippet: "Apr  2, 21:55 UTCResolved - This incident has been resolved.Apr  2, 21:06 UTCUpdate - We have rolled out a fix and are monitoring recovery.Apr  2, 20:50 UTCUpdate - We continue to investigate elevated errors and timeouts across GitHub servicesApr  2, 20:26 UTCUpdate - We are investigating reports of service unavailability.Apr  2, 20:20 UTCInvestigating - We are investigating reports of degraded performance.",
        guid: "https://www.githubstatus.com/incidents/80d0cs6kpsps",
        isoDate: "2020-04-02T21:55:00.000Z",
        link: "https://www.githubstatus.com/incidents/80d0cs6kpsps",
        pubDate: "Thu, 02 Apr 2020 21:55:00 +0000",
        title: "Incident on 2020-04-02 20:20 UTC"
      },
      {
        content: "\n<p><small>Mar <var data-var='date'>31</var>, <var data-var='time'>08:00</var> UTC</small><br><strong>Resolved</strong> - Webhook deliveries were delayed or may have failed completely from 08:02UTC to 08:12UTC and again from 08:35UTC to 08:43UTC due to network connectivity problems</p>      ",
        contentSnippet: "Mar 31, 08:00 UTCResolved - Webhook deliveries were delayed or may have failed completely from 08:02UTC to 08:12UTC and again from 08:35UTC to 08:43UTC due to network connectivity problems",
        guid: "https://www.githubstatus.com/incidents/qb2vmff9bnf5",
        isoDate: "2020-03-31T08:00:00.000Z",
        link: "https://www.githubstatus.com/incidents/qb2vmff9bnf5",
        pubDate: "Tue, 31 Mar 2020 08:00:00 +0000",
        title: "Webhook deliveries delayed"
      },
      {
        content: "\n<p><small>Mar <var data-var='date'>22</var>, <var data-var='time'>22:50</var> UTC</small><br><strong>Resolved</strong> - This incident has been resolved.</p><p><small>Mar <var data-var='date'>22</var>, <var data-var='time'>22:08</var> UTC</small><br><strong>Update</strong> - Delays for Actions jobs have recovered. We are continuing to monitor.</p><p><small>Mar <var data-var='date'>22</var>, <var data-var='time'>21:12</var> UTC</small><br><strong>Update</strong> - We continue to remediate the cause of Actions delays.</p><p><small>Mar <var data-var='date'>22</var>, <var data-var='time'>20:29</var> UTC</small><br><strong>Update</strong> - We have identified the source of the delays and are working to remediate.</p><p><small>Mar <var data-var='date'>22</var>, <var data-var='time'>19:58</var> UTC</small><br><strong>Investigating</strong> - We are investigating delays in running Action jobs on Linux.</p>      ",
        contentSnippet: "Mar 22, 22:50 UTCResolved - This incident has been resolved.Mar 22, 22:08 UTCUpdate - Delays for Actions jobs have recovered. We are continuing to monitor.Mar 22, 21:12 UTCUpdate - We continue to remediate the cause of Actions delays.Mar 22, 20:29 UTCUpdate - We have identified the source of the delays and are working to remediate.Mar 22, 19:58 UTCInvestigating - We are investigating delays in running Action jobs on Linux.",
        guid: "https://www.githubstatus.com/incidents/nl6z850vrvmy",
        isoDate: "2020-03-22T22:50:35.000Z",
        link: "https://www.githubstatus.com/incidents/nl6z850vrvmy",
        pubDate: "Sun, 22 Mar 2020 22:50:35 +0000",
        title: "Incident on 2020-03-22 19:58 UTC"
      },
      {
        content: "\n<p><small>Mar <var data-var='date'>12</var>, <var data-var='time'>15:50</var> UTC</small><br><strong>Resolved</strong> - This incident has been resolved.</p><p><small>Mar <var data-var='date'>12</var>, <var data-var='time'>15:31</var> UTC</small><br><strong>Investigating</strong> - Currently investigating increase in Pages build failures.</p>      ",
        contentSnippet: "Mar 12, 15:50 UTCResolved - This incident has been resolved.Mar 12, 15:31 UTCInvestigating - Currently investigating increase in Pages build failures.",
        guid: "https://www.githubstatus.com/incidents/401x671l9z4x",
        isoDate: "2020-03-12T15:50:33.000Z",
        link: "https://www.githubstatus.com/incidents/401x671l9z4x",
        pubDate: "Thu, 12 Mar 2020 15:50:33 +0000",
        title: "Incident on 2020-03-12 15:31 UTC"
      },
      {
        content: "\n<p><small>Mar <var data-var='date'> 6</var>, <var data-var='time'>00:22</var> UTC</small><br><strong>Resolved</strong> - This incident has been resolved.</p><p><small>Mar <var data-var='date'> 6</var>, <var data-var='time'>00:11</var> UTC</small><br><strong>Update</strong> - We are monitoring service recovery. We are processing a backlog of notifications.</p><p><small>Mar <var data-var='date'> 5</var>, <var data-var='time'>23:47</var> UTC</small><br><strong>Investigating</strong> - We are currently investigating a delay in notification delivery.</p>      ",
        contentSnippet: "Mar  6, 00:22 UTCResolved - This incident has been resolved.Mar  6, 00:11 UTCUpdate - We are monitoring service recovery. We are processing a backlog of notifications.Mar  5, 23:47 UTCInvestigating - We are currently investigating a delay in notification delivery.",
        guid: "https://www.githubstatus.com/incidents/lcgmxy9pmgm4",
        isoDate: "2020-03-06T00:22:20.000Z",
        link: "https://www.githubstatus.com/incidents/lcgmxy9pmgm4",
        pubDate: "Fri, 06 Mar 2020 00:22:20 +0000",
        title: "Incident on 2020-03-05 23:47 UTC"
      },
    ],
    link: "https://www.githubstatus.com",
    pubDate: "Sat, 04 Apr 2020 08:08:42 +0000",
    title: "GitHub Status - Incident History",
    name: 'GitHub',
  }
];
