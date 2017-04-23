$(function() {

    $.ajax({
    url: 'https://www.codeschool.com/users/2687967.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
      addBadges(response.badges);
    console.log("response", response);
    }
  });


  function addCourses(courses) {
    var $courseBadges = $('#coursebadges');

    courses.forEach(function(course) {
      var $course = $('<div />', {
        'class' : 'course'
      }).appendTo($courseBadges);

      $('<h3 />', {
        text : course.title
      }).appendTo($course);

      $('<img />', {
        src : course.badge
      }).appendTo($course);

      $('<a />', {
        'class' : 'btn btn-primary',
        target : '_blank',
        href : course.url,
        text : 'See Course'
      }).appendTo($course);
    
    })
  }

  function addBadges(badges) {
    var $achievementBadges = $('#achievementbadges');

    badges.forEach(function(achievement) {

      if (achievement.course_url === null) {
        var $badge = $('<div />', {
          'class' : 'course'
        }).appendTo($achievementBadges);

        $('<h3 />', {
          text : achievement.name
        }).appendTo($badge);

        $('<img />', {
          src : achievement.badge
        }).appendTo($badge);

        var badgeUrl = "https://www.codeschool.com/users/2687967/badges/" + achievement.badge.split('/')[6];
        $('<a />', {
          'class' : 'btn btn-primary',
          target : '_blank',
          href : badgeUrl,
          text : 'See Badge'
        }).appendTo($badge);
      }

    })
  }

});
