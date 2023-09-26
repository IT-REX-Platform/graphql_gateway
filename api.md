# GITS API

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [AssessmentMetadata](#assessmentmetadata)
    * [AssociationQuestion](#associationquestion)
    * [Chapter](#chapter)
    * [ChapterPayload](#chapterpayload)
    * [ClozeBlankElement](#clozeblankelement)
    * [ClozeQuestion](#clozequestion)
    * [ClozeTextElement](#clozetextelement)
    * [CompositeProgressInformation](#compositeprogressinformation)
    * [ContentMetadata](#contentmetadata)
    * [ContentMutation](#contentmutation)
    * [ContentPayload](#contentpayload)
    * [Course](#course)
    * [CourseMembership](#coursemembership)
    * [CoursePayload](#coursepayload)
    * [CourseResourceAssociation](#courseresourceassociation)
    * [ExactAnswerQuestion](#exactanswerquestion)
    * [Flashcard](#flashcard)
    * [FlashcardProgressData](#flashcardprogressdata)
    * [FlashcardProgressDataLog](#flashcardprogressdatalog)
    * [FlashcardSet](#flashcardset)
    * [FlashcardSetAssessment](#flashcardsetassessment)
    * [FlashcardSetMutation](#flashcardsetmutation)
    * [FlashcardSide](#flashcardside)
    * [MediaContent](#mediacontent)
    * [MediaRecord](#mediarecord)
    * [MediaRecordProgressData](#mediarecordprogressdata)
    * [MultipleChoiceAnswer](#multiplechoiceanswer)
    * [MultipleChoiceQuestion](#multiplechoicequestion)
    * [NumericQuestion](#numericquestion)
    * [PaginationInfo](#paginationinfo)
    * [ProgressLogItem](#progresslogitem)
    * [PublicUserInfo](#publicuserinfo)
    * [Quiz](#quiz)
    * [QuizAssessment](#quizassessment)
    * [QuizMutation](#quizmutation)
    * [ResourceMarkdown](#resourcemarkdown)
    * [RewardLogItem](#rewardlogitem)
    * [RewardScore](#rewardscore)
    * [RewardScores](#rewardscores)
    * [ScoreboardItem](#scoreboarditem)
    * [Section](#section)
    * [SectionMutation](#sectionmutation)
    * [SelfAssessmentQuestion](#selfassessmentquestion)
    * [SingleAssociation](#singleassociation)
    * [SkillLevel](#skilllevel)
    * [SkillLevelLogItem](#skilllevellogitem)
    * [SkillLevels](#skilllevels)
    * [Stage](#stage)
    * [Suggestion](#suggestion)
    * [UserInfo](#userinfo)
    * [UserProgressData](#userprogressdata)
  * [Inputs](#inputs)
    * [AssessmentMetadataInput](#assessmentmetadatainput)
    * [AssociationInput](#associationinput)
    * [ChapterFilter](#chapterfilter)
    * [ClozeElementInput](#clozeelementinput)
    * [CourseFilter](#coursefilter)
    * [CourseMembershipInput](#coursemembershipinput)
    * [CreateAssessmentInput](#createassessmentinput)
    * [CreateAssociationQuestionInput](#createassociationquestioninput)
    * [CreateChapterInput](#createchapterinput)
    * [CreateClozeQuestionInput](#createclozequestioninput)
    * [CreateContentMetadataInput](#createcontentmetadatainput)
    * [CreateCourseInput](#createcourseinput)
    * [CreateExactAnswerQuestionInput](#createexactanswerquestioninput)
    * [CreateFlashcardInput](#createflashcardinput)
    * [CreateFlashcardSetInput](#createflashcardsetinput)
    * [CreateMediaContentInput](#createmediacontentinput)
    * [CreateMediaRecordInput](#createmediarecordinput)
    * [CreateMultipleChoiceQuestionInput](#createmultiplechoicequestioninput)
    * [CreateNumericQuestionInput](#createnumericquestioninput)
    * [CreateQuizInput](#createquizinput)
    * [CreateSectionInput](#createsectioninput)
    * [CreateSelfAssessmentQuestionInput](#createselfassessmentquestioninput)
    * [CreateStageInput](#createstageinput)
    * [DateTimeFilter](#datetimefilter)
    * [FlashcardSideInput](#flashcardsideinput)
    * [IntFilter](#intfilter)
    * [LogFlashcardLearnedInput](#logflashcardlearnedinput)
    * [LogFlashcardSetLearnedInput](#logflashcardsetlearnedinput)
    * [MultipleChoiceAnswerInput](#multiplechoiceanswerinput)
    * [Pagination](#pagination)
    * [QuestionCompletedInput](#questioncompletedinput)
    * [QuizCompletedInput](#quizcompletedinput)
    * [ResourceMarkdownInput](#resourcemarkdowninput)
    * [StringFilter](#stringfilter)
    * [UpdateAssessmentInput](#updateassessmentinput)
    * [UpdateAssociationQuestionInput](#updateassociationquestioninput)
    * [UpdateChapterInput](#updatechapterinput)
    * [UpdateClozeQuestionInput](#updateclozequestioninput)
    * [UpdateContentMetadataInput](#updatecontentmetadatainput)
    * [UpdateCourseInput](#updatecourseinput)
    * [UpdateExactAnswerQuestionInput](#updateexactanswerquestioninput)
    * [UpdateFlashcardInput](#updateflashcardinput)
    * [UpdateMediaContentInput](#updatemediacontentinput)
    * [UpdateMediaRecordInput](#updatemediarecordinput)
    * [UpdateMultipleChoiceQuestionInput](#updatemultiplechoicequestioninput)
    * [UpdateNumericQuestionInput](#updatenumericquestioninput)
    * [UpdateSelfAssessmentQuestionInput](#updateselfassessmentquestioninput)
    * [UpdateStageInput](#updatestageinput)
  * [Enums](#enums)
    * [ClozeElementType](#clozeelementtype)
    * [ContentType](#contenttype)
    * [MediaType](#mediatype)
    * [QuestionPoolingMode](#questionpoolingmode)
    * [QuestionType](#questiontype)
    * [RewardChangeReason](#rewardchangereason)
    * [SkillType](#skilltype)
    * [SortDirection](#sortdirection)
    * [SuggestionType](#suggestiontype)
    * [UserRoleInCourse](#userroleincourse)
    * [YearDivision](#yeardivision)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Date](#date)
    * [DateTime](#datetime)
    * [Float](#float)
    * [Int](#int)
    * [JSON](#json)
    * [LocalTime](#localtime)
    * [ResolveToSourceArgs](#resolvetosourceargs)
    * [String](#string)
    * [Time](#time)
    * [UUID](#uuid)
    * [Url](#url)
  * [Interfaces](#interfaces)
    * [Assessment](#assessment)
    * [Content](#content)
    * [Question](#question)
  * [Unions](#unions)
    * [ClozeElement](#clozeelement)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>findPublicUserInfos</strong></td>
<td valign="top">[<a href="#publicuserinfo">PublicUserInfo</a>]!</td>
<td>


Gets the publicly available information for a list of users with the specified IDs.
If a user does not exist, null is returned for that user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currentUserInfo</strong></td>
<td valign="top"><a href="#userinfo">UserInfo</a>!</td>
<td>


Gets the user information of the currently authorized user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>findUserInfos</strong></td>
<td valign="top">[<a href="#userinfo">UserInfo</a>]!</td>
<td>


Gets all of the users' information for a list of users with the specified IDs.
Only available to privileged users.
If a user does not exist, null is returned for that user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>flashcardsByIds</strong></td>
<td valign="top">[<a href="#flashcard">Flashcard</a>!]!</td>
<td>


Get flashcards by their ids

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>findFlashcardSetsByAssessmentIds</strong></td>
<td valign="top">[<a href="#flashcardset">FlashcardSet</a>]!</td>
<td>


Get flashcard sets by their assessment ids.
Returns a list of flashcard sets in the same order as the provided ids.
Each element is null if the corresponding id is not found.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assessmentIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userCourseRewardScores</strong></td>
<td valign="top"><a href="#rewardscores">RewardScores</a>!</td>
<td>


Get the reward score of the current user for the specified course.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">courseId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>courseRewardScoresForUser</strong></td>
<td valign="top"><a href="#rewardscores">RewardScores</a>!</td>
<td>


Get the reward score of the specified user for the specified course.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">courseId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scoreboard</strong></td>
<td valign="top">[<a href="#scoreboarditem">ScoreboardItem</a>!]!</td>
<td>


Gets the power scores for each user in the course, ordered by power score descending.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">courseId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>courses</strong></td>
<td valign="top"><a href="#coursepayload">CoursePayload</a>!</td>
<td>


Get a list of courses. Can be filtered, sorted and paginated.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#coursefilter">CourseFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td>


The fields to sort by.
Throws an error if no field with the given name exists.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortDirection</td>
<td valign="top">[<a href="#sortdirection">SortDirection</a>!]!</td>
<td>


The sort direction for each field. If not specified, defaults to ASC.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pagination</td>
<td valign="top"><a href="#pagination">Pagination</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>coursesByIds</strong></td>
<td valign="top">[<a href="#course">Course</a>!]!</td>
<td>


Returns the courses with the given ids.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chaptersByIds</strong></td>
<td valign="top">[<a href="#chapter">Chapter</a>!]!</td>
<td>


Returns the chapters with the given ids.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>courseResourceAssociationsByIds</strong></td>
<td valign="top">[<a href="#courseresourceassociation">CourseResourceAssociation</a>!]!</td>
<td>


Returns a set of Resource Objects for the given resource ids, containing a list of all course IDs for a resource and its availability in the course.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>resourceById</strong> ⚠️</td>
<td valign="top">[<a href="#courseresourceassociation">CourseResourceAssociation</a>!]!</td>
<td>


Returns a set of Resource Objects for the given resource ids, containing a list of all course IDs for a resource and its availability in the course.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Use courseResourceAssociationsByIds instead.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chapters</strong></td>
<td valign="top"><a href="#chapterpayload">ChapterPayload</a>!</td>
<td>


Get the list of chapters for a course. Can be filtered, sorted and paginated.
Throws an error if the course does not exist.
The default sort order is by chapter number.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">courseId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#chapterfilter">ChapterFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


The fields to sort by. The default sort order is by chapter number.
Throws an error if no field with the given name exists.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortDirection</td>
<td valign="top">[<a href="#sortdirection">SortDirection</a>!]!</td>
<td>


The sort direction for each field. If not specified, defaults to ASC.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pagination</td>
<td valign="top"><a href="#pagination">Pagination</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>courseMembershipsByUserIds</strong></td>
<td valign="top">[[<a href="#coursemembership">CourseMembership</a>!]!]!</td>
<td>


Returns the list of courseMemberships for the specified User.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>findQuizzesByAssessmentIds</strong></td>
<td valign="top">[<a href="#quiz">Quiz</a>]!</td>
<td>


Get quiz by assessment ID.
If any of the assessment IDs are not found, the corresponding quiz will be null.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assessmentIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contents</strong></td>
<td valign="top"><a href="#contentpayload">ContentPayload</a>!</td>
<td>


get all contents

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentsByIds</strong></td>
<td valign="top">[<a href="#content">Content</a>!]!</td>
<td>


Get contents by ids. Throws an error if any of the ids are not found.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>findContentsByIds</strong></td>
<td valign="top">[<a href="#content">Content</a>]!</td>
<td>


Get contents by ids. If any of the given ids are not found, the corresponding element in the result list will be null.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentsByChapterIds</strong></td>
<td valign="top">[[<a href="#content">Content</a>!]!]!</td>
<td>


get contents by chapter ids. Returns a list containing sublists, where each sublist contains all contents
associated with that chapter

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapterIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sectionsByChapterIds</strong></td>
<td valign="top">[[<a href="#section">Section</a>!]!]!</td>
<td>


Retrieves all existing sections for multiple chapters.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapterIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>_internal_noauth_progressByChapterIds</strong></td>
<td valign="top">[<a href="#compositeprogressinformation">CompositeProgressInformation</a>!]!</td>
<td>


Retrieve progress for multiple chapters

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapterIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestionsByChapterIds</strong></td>
<td valign="top">[<a href="#suggestion">Suggestion</a>!]!</td>
<td>


    Generates user specific suggestions for multiple chapters.

    Only content that the user can access will be considered.
    The contents will be ranked by suggested date, with the most overdue or most urgent content first.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapterIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


The ids of the chapters for which suggestions should be generated.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">amount</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The amount of suggestions to generate in total.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skillTypes</td>
<td valign="top">[<a href="#skilltype">SkillType</a>!]!</td>
<td>


Only suggestions for these skill types will be generated.
If no skill types are given, suggestions for all skill types will be generated,
also containing suggestions for media content (which do not have a skill type).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>_internal_noauth_achievableSkillTypesByChapterIds</strong></td>
<td valign="top">[[<a href="#skilltype">SkillType</a>!]!]!</td>
<td>


Retrieves all skill types that are achievable for the given chapters.
Each chapter will have its own list of skill types (batching query).

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapterIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userSkillLevelsByChapterIds</strong></td>
<td valign="top">[<a href="#skilllevels">SkillLevels</a>!]!</td>
<td>


Get the skill levels of the current user for all skill types for a list of chapter ids.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapterIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>skillLevelsForUserByChapterIds</strong></td>
<td valign="top">[<a href="#skilllevels">SkillLevels</a>!]!</td>
<td>


Get the skill levels of the specified user for all skill types for a list of chapter ids.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapterIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaRecordsByIds</strong></td>
<td valign="top">[<a href="#mediarecord">MediaRecord</a>!]!</td>
<td>


Returns the media records with the given IDs. Throws an error if a MediaRecord corresponding to a given ID
cannot be found.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>findMediaRecordsByIds</strong></td>
<td valign="top">[<a href="#mediarecord">MediaRecord</a>]!</td>
<td>


Like mediaRecordsByIds() returns the media records with the given IDs, but instead of throwing an error if an ID
cannot be found, it instead returns NULL for that media record.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">ids</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaRecords</strong> ⚠️</td>
<td valign="top">[<a href="#mediarecord">MediaRecord</a>!]!</td>
<td>


Returns all media records of the system.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

In production there should probably be no way to get all media records of the system.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userMediaRecords</strong></td>
<td valign="top">[<a href="#mediarecord">MediaRecord</a>!]!</td>
<td>


Returns all media records which the current user created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaRecordsByContentIds</strong></td>
<td valign="top">[[<a href="#mediarecord">MediaRecord</a>!]!]!</td>
<td>


Returns the media records associated the given content IDs as a list of lists where each sublist contains
the media records associated with the content ID at the same index in the input list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">contentIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createFlashcardSet</strong></td>
<td valign="top"><a href="#flashcardset">FlashcardSet</a>!</td>
<td>


Creates a new flashcard set.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assessmentId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createflashcardsetinput">CreateFlashcardSetInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteFlashcardSet</strong> ⚠️</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Deletes a flashcard set. Throws an error if the flashcard set does not exist.
The contained flashcards are deleted as well.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Only for development, will be removed in production. Use deleteAssessment in contents service instead.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mutateFlashcardSet</strong></td>
<td valign="top"><a href="#flashcardsetmutation">FlashcardSetMutation</a>!</td>
<td>


Modify a flashcard set.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assessmentId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>logFlashcardLearned</strong></td>
<td valign="top"><a href="#flashcard">Flashcard</a>!</td>
<td>


Logs that a user has learned a flashcard.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#logflashcardlearnedinput">LogFlashcardLearnedInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recalculateScores</strong> ⚠️</td>
<td valign="top"><a href="#rewardscores">RewardScores</a>!</td>
<td>


    ONLY FOR TESTING PURPOSES. DO NOT USE IN FRONTEND. WILL BE REMOVED.

    Triggers the recalculation of the reward score of the user.
    This is done automatically at some time in the night.

    The purpose of this mutation is to allow testing of the reward score and demonstrate the functionality.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Only for testing purposes. Will be removed.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">courseId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createCourse</strong></td>
<td valign="top"><a href="#course">Course</a>!</td>
<td>


Creates a new course with the given input and returns the created course.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createcourseinput">CreateCourseInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createChapter</strong></td>
<td valign="top"><a href="#chapter">Chapter</a>!</td>
<td>


Creates a new chapter with the given input and returns the created chapter.
The course id must be a course id of an existing course.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createchapterinput">CreateChapterInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCourse</strong></td>
<td valign="top"><a href="#course">Course</a>!</td>
<td>


Updates an existing course with the given input and returns the updated course.
The course id must be a course id of an existing course.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updatecourseinput">UpdateCourseInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateChapter</strong></td>
<td valign="top"><a href="#chapter">Chapter</a>!</td>
<td>


Updates an existing chapter with the given input and returns the updated chapter.
The chapter id must be a chapter id of an existing chapter.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updatechapterinput">UpdateChapterInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteCourse</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Deletes an existing course, throws an error if no course with the given id exists.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteChapter</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Deletes an existing chapter, throws an error if no chapter with the given id exists.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMembership</strong></td>
<td valign="top"><a href="#coursemembership">CourseMembership</a>!</td>
<td>


registers a user to a course with a role

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#coursemembershipinput">CourseMembershipInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMembership</strong></td>
<td valign="top"><a href="#coursemembership">CourseMembership</a>!</td>
<td>


updates the role of a user in a course

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#coursemembershipinput">CourseMembershipInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMembership</strong></td>
<td valign="top"><a href="#coursemembership">CourseMembership</a>!</td>
<td>


deletes user course link

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#coursemembershipinput">CourseMembershipInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createQuiz</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Create a quiz.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assessmentId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createquizinput">CreateQuizInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mutateQuiz</strong></td>
<td valign="top"><a href="#quizmutation">QuizMutation</a>!</td>
<td>


Modify a quiz.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assessmentId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteQuiz</strong> ⚠️</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Delete a quiz.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Only for development, will be removed in production. Use deleteAssessment in contents service instead.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assessmentId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>logQuizCompleted</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Log that a multiple choice quiz is completed.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#quizcompletedinput">QuizCompletedInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMediaContent</strong></td>
<td valign="top"><a href="#mediacontent">MediaContent</a>!</td>
<td>


Create new media content

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createmediacontentinput">CreateMediaContentInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createAssessment</strong></td>
<td valign="top"><a href="#assessment">Assessment</a>!</td>
<td>


Create a new Assessment

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createassessmentinput">CreateAssessmentInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mutateContent</strong></td>
<td valign="top"><a href="#contentmutation">ContentMutation</a>!</td>
<td>


Modify Content

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">contentId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createSection</strong></td>
<td valign="top"><a href="#section">Section</a>!</td>
<td>


Create new Section

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createsectioninput">CreateSectionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mutateSection</strong></td>
<td valign="top"><a href="#sectionmutation">SectionMutation</a>!</td>
<td>


Modify Sections

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sectionId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recalculateLevels</strong> ⚠️</td>
<td valign="top"><a href="#skilllevels">SkillLevels</a>!</td>
<td>


  ONLY FOR TESTING PURPOSES. DO NOT USE IN FRONTEND. WILL BE REMOVED.

  Triggers the recalculation of the skill level of the user.
  This is done automatically at some time in the night.

  The purpose of this mutation is to allow testing of the skill level score and demonstrate the functionality.

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

Only for testing purposes. Will be removed.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">chapterId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMediaRecord</strong></td>
<td valign="top"><a href="#mediarecord">MediaRecord</a>!</td>
<td>


Creates a new media record

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createmediarecordinput">CreateMediaRecordInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMediaRecord</strong></td>
<td valign="top"><a href="#mediarecord">MediaRecord</a>!</td>
<td>


Updates an existing media record with the given UUID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updatemediarecordinput">UpdateMediaRecordInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteMediaRecord</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Deletes the media record with the given UUID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>linkMediaRecordsWithContent</strong></td>
<td valign="top">[<a href="#mediarecord">MediaRecord</a>!]!</td>
<td>


Allows multiple media records to be linked/added to a content.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">contentId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaRecordIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>logMediaRecordWorkedOn</strong></td>
<td valign="top"><a href="#mediarecord">MediaRecord</a>!</td>
<td>


    Logs that a media has been worked on by the current user.
    See https://gits-enpro.readthedocs.io/en/latest/dev-manuals/gamification/userProgress.html

    Possible side effects:
    When all media records of a content have been worked on by a user,
    a user-progress event is emitted for the content.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaRecordId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createMediaContentAndLinkRecords</strong></td>
<td valign="top"><a href="#mediacontent">MediaContent</a>!</td>
<td>

Creates a new media content and links the given media records to it.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">contentInput</td>
<td valign="top"><a href="#createmediacontentinput">CreateMediaContentInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mediaRecordIds</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createQuizAssessment</strong></td>
<td valign="top"><a href="#quizassessment">QuizAssessment</a>!</td>
<td>

Creates a new quiz assessment and a new, linked quiz with the given properties.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assessmentInput</td>
<td valign="top"><a href="#createassessmentinput">CreateAssessmentInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">quizInput</td>
<td valign="top"><a href="#createquizinput">CreateQuizInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createFlashcardSetAssessment</strong></td>
<td valign="top"><a href="#flashcardsetassessment">FlashcardSetAssessment</a></td>
<td>

Creates a new flashcard set assessment and a new, linked flashcard set with the given properties.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">assessmentInput</td>
<td valign="top"><a href="#createassessmentinput">CreateAssessmentInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">flashcardSetInput</td>
<td valign="top"><a href="#createflashcardsetinput">CreateFlashcardSetInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### AssessmentMetadata

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>skillPoints</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of skill points a student receives for completing this content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>skillTypes</strong></td>
<td valign="top">[<a href="#skilltype">SkillType</a>!]!</td>
<td>


Type of the assessment

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>initialLearningInterval</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


The initial learning interval for the assessment in days.
This is the interval that is applied after the assessment is completed the first time.
Following intervals are calculated based on the previous interval and the user's performance.
If this is null, the assessment will never be scheduled for review, which
is useful for assessments that are not meant to be repeated.

</td>
</tr>
</tbody>
</table>

### AssociationQuestion


Association question, i.e., a question where the user has to assign the correct right side to each left side.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text to display above the association question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAssociations</strong></td>
<td valign="top">[<a href="#singleassociation">SingleAssociation</a>!]!</td>
<td>


List of correct associations.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>leftSide</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


Computed list of all the left sides of the associations, shuffled.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rightSide</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


Computed list of all the right sides of the associations, shuffled.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the question, i.e., the position of the question in the list of questions.
Only relevant if questionPoolingMode is ORDERED.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#questiontype">QuestionType</a>!</td>
<td>


Type of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### Chapter


A chapter is a part of a course.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the chapter, generated automatically

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Title of the chapter, maximum length is 255 characters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Description of the chapter, maximum length is 3000 characters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the chapter, determines the order of the chapters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


Start date of the chapter, ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


End date of the chapter, ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedStartDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


Suggested Start date to start the chapter, ISO 8601 format.
Must be after Start Date and before the End dates.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedEndDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


Suggested End date of the chapter, ISO 8601 format.
Must be after the Start Dates and before the End dates.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>course</strong></td>
<td valign="top"><a href="#course">Course</a>!</td>
<td>


The course the chapter belongs to.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contents</strong></td>
<td valign="top">[<a href="#content">Content</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sections</strong></td>
<td valign="top">[<a href="#section">Section</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>skillLevels</strong></td>
<td valign="top"><a href="#skilllevels">SkillLevels</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>achievableSkillTypes</strong></td>
<td valign="top">[<a href="#skilltype">SkillType</a>]!</td>
<td>

The skill types which are achievable in this chapter.
A skill type is achievable if there is at least one assessment in this chapter with this skill type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userProgress</strong></td>
<td valign="top"><a href="#compositeprogressinformation">CompositeProgressInformation</a>!</td>
<td>

The progress of the current user in this chapter.

</td>
</tr>
</tbody>
</table>

### ChapterPayload


Return type of the chapters query, contains a list of chapters and pagination info.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>elements</strong></td>
<td valign="top">[<a href="#chapter">Chapter</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pagination</strong></td>
<td valign="top"><a href="#paginationinfo">PaginationInfo</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ClozeBlankElement

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>correctAnswer</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


The correct answer for the blank.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the blank when the user selects a wrong answer, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### ClozeQuestion

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>clozeElements</strong></td>
<td valign="top">[<a href="#clozeelement">ClozeElement</a>!]!</td>
<td>


The elements of the cloze question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>additionalWrongAnswers</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


Addtional wrong answers for the blanks.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>allBlanks</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


All selectable answers for the blanks (computed). This contains the correct answers as well as wrong answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>showBlanksList</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether the blanks must be answered in free text or by selecting the correct answer from a list.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the question, i.e., the position of the question in the list of questions.
Only relevant if questionPoolingMode is ORDERED.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#questiontype">QuestionType</a>!</td>
<td>


Type of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### ClozeTextElement

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the element, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### CompositeProgressInformation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


percentage of completedContents/totalContents

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>completedContents</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


absolut number of completed content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalContents</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


absolut number of total content

</td>
</tr>
</tbody>
</table>

### ContentMetadata

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Name of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#contenttype">ContentType</a>!</td>
<td>


Content type

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


Suggested date when the content should be done

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rewardPoints</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of reward points a student receives for completing this content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chapterId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the chapter this content is associated with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tagNames</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


TagNames this content is tagged with

</td>
</tr>
</tbody>
</table>

### ContentMutation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>contentId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Identifier of Content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMediaContent</strong></td>
<td valign="top"><a href="#mediacontent">MediaContent</a>!</td>
<td>


Update an existing Content

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updatemediacontentinput">UpdateMediaContentInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateAssessment</strong></td>
<td valign="top"><a href="#assessment">Assessment</a>!</td>
<td>


Update an existing Assessment

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updateassessmentinput">UpdateAssessmentInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteContent</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Delete an existing Content, throws an error if no Content with the given id exists

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addTagToContent</strong></td>
<td valign="top"><a href="#content">Content</a>!</td>
<td>


Add a tag to an existing content

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tagName</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>removeTagFromContent</strong></td>
<td valign="top"><a href="#content">Content</a>!</td>
<td>


Remove a tag from an existing content

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">tagName</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### ContentPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>elements</strong></td>
<td valign="top">[<a href="#content">Content</a>!]!</td>
<td>


the contents

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#paginationinfo">PaginationInfo</a>!</td>
<td>


pagination info

</td>
</tr>
</tbody>
</table>

### Course


Courses are the main entity of the application. They are the top level of the
hierarchy and contain chapters.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the course. Generated automatically when creating a new course.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Title of the course. Maximal length is 255 characters, must not be blank.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Detailed description of the course. Maximal length is 3000 characters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


Start date of the course, ISO 8601 format.
Users can only access the course and work on course content after the start date.
Must be before the end date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


End date of the course, ISO 8601 format.
Users can no longer access the course and work on course content after the end date.
Must be after the start date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>published</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Published state of the course. If the course is published, it is visible to users.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startYear</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


The year in which the term starts.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>yearDivision</strong></td>
<td valign="top"><a href="#yeardivision">YearDivision</a></td>
<td>


The division of the academic calendar in which the term takes place.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chapters</strong></td>
<td valign="top"><a href="#chapterpayload">ChapterPayload</a>!</td>
<td>


Chapters of the course. Can be filtered and sorted.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#chapterfilter">ChapterFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortBy</td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


The fields to sort by. The default sort order is by chapter number.
Throws an error if no field with the given name exists.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortDirection</td>
<td valign="top">[<a href="#sortdirection">SortDirection</a>!]!</td>
<td>


The sort direction for each field. If not specified, defaults to ASC.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pagination</td>
<td valign="top"><a href="#pagination">Pagination</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rewardScores</strong></td>
<td valign="top"><a href="#rewardscores">RewardScores</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scoreboard</strong></td>
<td valign="top">[<a href="#scoreboarditem">ScoreboardItem</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestions</strong></td>
<td valign="top">[<a href="#suggestion">Suggestion</a>!]!</td>
<td>

Suggests content of the course which the current user should
learn next (both new content and content to repeat).

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">amount</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

The amount of suggestions to generate in total.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skillTypes</td>
<td valign="top">[<a href="#skilltype">SkillType</a>!]!</td>
<td>

Only suggestions for these skill types will be generated.
If no skill types are given, suggestions for all skill types will be generated,
also containing suggestions for media content (which do not have a skill type).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userProgress</strong></td>
<td valign="top"><a href="#compositeprogressinformation">CompositeProgressInformation</a>!</td>
<td>

The progress of the current user in this course.

</td>
</tr>
</tbody>
</table>

### CourseMembership


Represents a course membership object of a user. Each user can be a member of set of courses and some users can also own courses

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Id of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>courseId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Id of the course the user is a member of.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="#userroleincourse">UserRoleInCourse</a>!</td>
<td>


The role of the user in the course.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>course</strong></td>
<td valign="top"><a href="#course">Course</a>!</td>
<td>


Course of the Course Membership

</td>
</tr>
</tbody>
</table>

### CoursePayload


Return type for the course query. Contains the course and the pagination info.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>elements</strong></td>
<td valign="top">[<a href="#course">Course</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pagination</strong></td>
<td valign="top"><a href="#paginationinfo">PaginationInfo</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CourseResourceAssociation


Resources are all types of content present in a course. Each resource can be available or unavailable in a course.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the resource.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableCourses</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


A list of course IDs a resource is presently available in

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>unAvailableCourses</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


A list of course IDs a resource is presently unavailable in

</td>
</tr>
</tbody>
</table>

### ExactAnswerQuestion


A question with a clear, correct answer that can be automatically checked.
Differs from self-assessment questions in that the user has to enter one of the correct answers and
the answer is checked automatically.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAnswers</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


A list of possible correct answers. The user has to enter one of these answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caseSensitive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


If the answer is case sensitive. If true, the answer is checked case sensitive.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the question when the user enters a wrong answer, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the question, i.e., the position of the question in the list of questions.
Only relevant if questionPoolingMode is ORDERED.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#questiontype">QuestionType</a>!</td>
<td>


Type of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### Flashcard


A flashcard is a set of two or more sides. Each side has a label and a text.
The label is used to specify which side of the flashcard is being shown to the user first for learning
and which sides he has to guess.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of this flashcard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sides</strong></td>
<td valign="top">[<a href="#flashcardside">FlashcardSide</a>!]!</td>
<td>


List of sides of this flashcard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userProgressData</strong></td>
<td valign="top"><a href="#flashcardprogressdata">FlashcardProgressData</a>!</td>
<td>


Progress data of the flashcard, specific to given users.
If userId is not provided, the progress data of the current user is returned.

</td>
</tr>
</tbody>
</table>

### FlashcardProgressData

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>lastLearned</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


The date the user learned the flashcard.
This is null it the user has not learned the content item once.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>learningInterval</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


The learning interval in days for the content item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nextLearn</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


The next time the content should be learned.
Calculated using the date the user completed the content item and the learning interval.
This is null if the user has not completed the content item once.

</td>
</tr>
</tbody>
</table>

### FlashcardProgressDataLog

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a></td>
<td>


The id of the Log

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>learnedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


The date the user learned the flashcard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>success</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether the user knew the flashcard or not.

</td>
</tr>
</tbody>
</table>

### FlashcardSet


A set of flashcards. A flashcard set belongs to exactly one assessment. Therefore, the uuid of the assessment
also serves as the identifier of a flashcard set.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assessmentId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


The uuid of the assessment this flashcard set belongs to.
This also serves as the identifier of this flashcard set.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>flashcards</strong></td>
<td valign="top">[<a href="#flashcard">Flashcard</a>!]!</td>
<td>


List of flashcards in this set.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assessment</strong></td>
<td valign="top"><a href="#flashcardsetassessment">FlashcardSetAssessment</a></td>
<td>

The assessment this FlashcardSet belongs to.

</td>
</tr>
</tbody>
</table>

### FlashcardSetAssessment


A set of flashcards, flashcard related fields are stored in the flashcard service.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assessmentMetadata</strong></td>
<td valign="top"><a href="#assessmentmetadata">AssessmentMetadata</a>!</td>
<td>


Assessment metadata

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#contentmetadata">ContentMetadata</a>!</td>
<td>


Metadata of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userProgressData</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the content for the current user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progressDataForUser</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the specified user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>flashcardSet</strong></td>
<td valign="top"><a href="#flashcardset">FlashcardSet</a></td>
<td>

The FlashcardSet of the assessment.

</td>
</tr>
</tbody>
</table>

### FlashcardSetMutation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assessmentId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the flashcard set that is being modified.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createFlashcard</strong></td>
<td valign="top"><a href="#flashcard">Flashcard</a>!</td>
<td>


Creates a new flashcard. Throws an error if the flashcard set does not exist.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createflashcardinput">CreateFlashcardInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateFlashcard</strong></td>
<td valign="top"><a href="#flashcard">Flashcard</a>!</td>
<td>


Updates a flashcard. Throws an error if the flashcard does not exist.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updateflashcardinput">UpdateFlashcardInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteFlashcard</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Deletes the flashcard with the specified ID. Throws an error if the flashcard does not exist.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### FlashcardSide

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of this flashcard side as rich text in SlateJS json.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Label of this flashcard side. E.g. "Front" or "Back", or "Question" or "Answer".

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isQuestion</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether this side is a question, i.e. should be shown to the user to guess the other sides or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAnswer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether this side is also an answer. Some Flashcards can have their sides be used as both questions or answers for the other sides

</td>
</tr>
</tbody>
</table>

### MediaContent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#contentmetadata">ContentMetadata</a>!</td>
<td>


Metadata of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userProgressData</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the content for the current user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progressDataForUser</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the specified user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mediaRecords</strong></td>
<td valign="top">[<a href="#mediarecord">MediaRecord</a>!]!</td>
<td>

The media records linked to this media content.

</td>
</tr>
</tbody>
</table>

### MediaRecord

 schema file of the microservice
 defines data types, queries and mutations
 this can be done in a separate files as long as they are in this folder and
 end with .graphqls

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the media record

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Name of the media record

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creatorId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


User ID of the creator of the media record.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#mediatype">MediaType</a>!</td>
<td>


Type of the media record

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentIds</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


IDs of the MediaContents this media record is associated with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uploadUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Temporary upload url for the media record

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>downloadUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Temporary download url for the media record

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userProgressData</strong></td>
<td valign="top"><a href="#mediarecordprogressdata">MediaRecordProgressData</a>!</td>
<td>


The progress data of the given user for this medium.

</td>
</tr>
</tbody>
</table>

### MediaRecordProgressData

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>workedOn</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether the medium has been worked on by the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dateWorkedOn</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


Date on which the medium was worked on by the user.
This is null if the medium has not been worked on by the user.

</td>
</tr>
</tbody>
</table>

### MultipleChoiceAnswer

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>answerText</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the answer, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correct</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether the answer is correct or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for when the user selects this answer, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### MultipleChoiceQuestion


Multiple choice question, i.e., a question with multiple answers of which the user has to select the correct ones.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>answers</strong></td>
<td valign="top">[<a href="#multiplechoiceanswer">MultipleChoiceAnswer</a>!]!</td>
<td>


List of answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberOfCorrectAnswers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


How many answers the user has to select. This is computed from the list of answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the question, i.e., the position of the question in the list of questions.
Only relevant if questionPoolingMode is ORDERED.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#questiontype">QuestionType</a>!</td>
<td>


Type of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### NumericQuestion

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAnswer</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The correct answer to the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tolerance</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The tolerance for the correct answer. The user's answer is correct if it is within the tolerance of the correct answer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the question when the user enters a wrong answer, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the question, i.e., the position of the question in the list of questions.
Only relevant if questionPoolingMode is ORDERED.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#questiontype">QuestionType</a>!</td>
<td>


Type of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### PaginationInfo


Return type for information about paginated results.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The current page number.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>size</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The number of elements per page.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalElements</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The total number of elements across all pages.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalPages</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The total number of pages.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasNext</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether there is a next page.

</td>
</tr>
</tbody>
</table>

### ProgressLogItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>timestamp</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


The date the user completed the content item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>success</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether the user completed the content item successfully.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctness</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


Value between 0 and 1 representing the user's correctness on the content item.
Can be null as some contents cannot provide a meaningful correctness value.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hintsUsed</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


How many hints the user used to complete the content item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeToComplete</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


Time in milliseconds it took the user to complete the content item.
Can be null for contents that do not measure completion time.

</td>
</tr>
</tbody>
</table>

### PublicUserInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Quiz


A quiz is a set of questions that the user has to answer correctly to pass the quiz.
Questions can be of different types, e.g., multiple choice, clozes, or open questions.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assessmentId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Identifier of the quiz, same as the identifier of the assessment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>questionPool</strong></td>
<td valign="top">[<a href="#question">Question</a>!]!</td>
<td>


List of questions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requiredCorrectAnswers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Threshold of the quiz, i.e., how many questions the user has to answer correctly to pass the quiz.
If this number is greater than the number of questions, the behavior is the same
as if it was equal to the number of questions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>questionPoolingMode</strong></td>
<td valign="top"><a href="#questionpoolingmode">QuestionPoolingMode</a>!</td>
<td>


Question pooling mode of the quiz.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberOfRandomlySelectedQuestions</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


    Number of questions that are randomly selected from the list of questions.
    Will only be considered if questionPoolingMode is RANDOM.

    If this is greater than the number of questions, the behavior is the same
    as if it was equal to the number of questions.

    If this is null or not set, the behavior is the same as if it was equal to the number of questions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>selectedQuestions</strong></td>
<td valign="top">[<a href="#question">Question</a>!]!</td>
<td>


The selected questions of the question pool.
This is identical to the list of questions if questionPoolingMode is ORDERED.
This will be different each time it is queried if questionPoolingMode is RANDOM.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assessment</strong></td>
<td valign="top"><a href="#quizassessment">QuizAssessment</a></td>
<td>

The assessment this quiz belongs to.

</td>
</tr>
</tbody>
</table>

### QuizAssessment


A quiz, quiz related fields are stored in the quiz service.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assessmentMetadata</strong></td>
<td valign="top"><a href="#assessmentmetadata">AssessmentMetadata</a>!</td>
<td>


Assessment metadata

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#contentmetadata">ContentMetadata</a>!</td>
<td>


Metadata of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userProgressData</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the content for the current user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progressDataForUser</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the specified user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>quiz</strong></td>
<td valign="top"><a href="#quiz">Quiz</a></td>
<td>

The quiz of the assessment.
If this is null the system is in an inconsistent state and the assessment should be deleted.

</td>
</tr>
</tbody>
</table>

### QuizMutation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assessmentId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Id of the quiz to modify.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addMultipleChoiceQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Add a multiple choice question to the quiz questions, at the end of the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createmultiplechoicequestioninput">CreateMultipleChoiceQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateMultipleChoiceQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Update a multiple choice question in the quiz questions.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updatemultiplechoicequestioninput">UpdateMultipleChoiceQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addClozeQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Add a cloze question to the quiz questions, at the end of the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createclozequestioninput">CreateClozeQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateClozeQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Update a cloze question in the quiz questions.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updateclozequestioninput">UpdateClozeQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addAssociationQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Add an association question to the quiz questions, at the end of the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createassociationquestioninput">CreateAssociationQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateAssociationQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Update an association question in the quiz questions.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updateassociationquestioninput">UpdateAssociationQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addExactAnswerQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Add an free text question with exact answer to the quiz questions, at the end of the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createexactanswerquestioninput">CreateExactAnswerQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateExactAnswerQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Update an free text question with exact answer in the quiz questions.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updateexactanswerquestioninput">UpdateExactAnswerQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addNumericQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Add a numeric question to the quiz questions, at the end of the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createnumericquestioninput">CreateNumericQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateNumericQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Update a numeric question in the quiz questions.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updatenumericquestioninput">UpdateNumericQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addSelfAssessmentQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Add a self assessment question to the quiz questions, at the end of the list.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createselfassessmentquestioninput">CreateSelfAssessmentQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateSelfAssessmentQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Update a self assessment question in the quiz questions.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updateselfassessmentquestioninput">UpdateSelfAssessmentQuestionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>removeQuestion</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Removes the question with the given number from the quiz.
This will also update the numbers of the following questions.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">number</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>switchQuestions</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Switch the position of two questions with the given numbers.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">firstNumber</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">secondNumber</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>setRequiredCorrectAnswers</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Set the threshold of the quiz, i.e., how many questions the user has to answer correctly to pass the quiz.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">requiredCorrectAnswers</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>setQuestionPoolingMode</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Set the question pooling mode of the quiz.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">questionPoolingMode</td>
<td valign="top"><a href="#questionpoolingmode">QuestionPoolingMode</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>setNumberOfRandomlySelectedQuestions</strong></td>
<td valign="top"><a href="#quiz">Quiz</a>!</td>
<td>


Set the number of questions that are randomly selected from the list of questions.
Will only be considered if questionPoolingMode is RANDOM.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">numberOfRandomlySelectedQuestions</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ResourceMarkdown

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


The raw ResourceMarkdown text.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>referencedMediaRecordIds</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


Ids of MediaRecords referenced in the ResourceMarkdown text in order.

</td>
</tr>
</tbody>
</table>

### RewardLogItem


An item in the reward score log.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


The date when the reward score changed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>difference</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The difference between the previous and the new reward score.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>oldValue</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The old reward score.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>newValue</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The new reward score.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reason</strong></td>
<td valign="top"><a href="#rewardchangereason">RewardChangeReason</a>!</td>
<td>


The reason why the reward score has changed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>associatedContentIds</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


The ids of the contents that are associated with the change.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>associatedContents</strong></td>
<td valign="top">[<a href="#content">Content</a>]!</td>
<td></td>
</tr>
</tbody>
</table>

### RewardScore


The reward score of a user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The absolute value of the reward score.
Health and fitness are between 0 and 100.
Growth, strength and power can be any non-negative integer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>percentage</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The relative value of the reward score.
Shows how many points relative to the total points have been achieved.
Only used for growth currently.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>log</strong></td>
<td valign="top">[<a href="#rewardlogitem">RewardLogItem</a>!]!</td>
<td>


A log of the changes to the reward score, ordered by date descending.

</td>
</tr>
</tbody>
</table>

### RewardScores


The five reward scores of a user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>health</strong></td>
<td valign="top"><a href="#rewardscore">RewardScore</a>!</td>
<td>


Health represents how up-to-date the user is with the course.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fitness</strong></td>
<td valign="top"><a href="#rewardscore">RewardScore</a>!</td>
<td>


Fitness represents how well the user repeats previously learned content.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>growth</strong></td>
<td valign="top"><a href="#rewardscore">RewardScore</a>!</td>
<td>


Growth represents the overall progress of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>strength</strong></td>
<td valign="top"><a href="#rewardscore">RewardScore</a>!</td>
<td>


Strength is earned by competing with other users.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>power</strong></td>
<td valign="top"><a href="#rewardscore">RewardScore</a>!</td>
<td>


A composite score of all the other scores.

</td>
</tr>
</tbody>
</table>

### ScoreboardItem


An item in the scoreboard.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


The user id of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>powerScore</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The power score of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#publicuserinfo">PublicUserInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### Section


Representation of a Section

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of the Section Object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Name of the Section

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chapterId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Chapter the Section is located in

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stages</strong></td>
<td valign="top">[<a href="#stage">Stage</a>!]!</td>
<td>


List of Stages contained in a Section

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chapter</strong></td>
<td valign="top"><a href="#chapter">Chapter</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SectionMutation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sectionId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Identifier of the section

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateSectionName</strong></td>
<td valign="top"><a href="#section">Section</a>!</td>
<td>


update the name of a Section

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteSection</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


delete a Section by ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createStage</strong></td>
<td valign="top"><a href="#stage">Stage</a>!</td>
<td>


create new Stage in Section

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createstageinput">CreateStageInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateStage</strong></td>
<td valign="top"><a href="#stage">Stage</a>!</td>
<td>


Update Content of Stage

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updatestageinput">UpdateStageInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteStage</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


delete Stage by ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateStageOrder</strong></td>
<td valign="top"><a href="#section">Section</a>!</td>
<td>


update Order of Stages within a Section

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">stages</td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### SelfAssessmentQuestion


A single question with a free text answer field, where the answer is not automatically checked.
The user has to enter a solution and self-assess whether it is correct or not.
This is useful for questions where the answer is not clear-cut, e.g. when the user should explain a concept.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>solutionSuggestion</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


A possible correct answer to the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the question, i.e., the position of the question in the list of questions.
Only relevant if questionPoolingMode is ORDERED.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#questiontype">QuestionType</a>!</td>
<td>


Type of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### SingleAssociation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>left</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


The left side of the association.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>right</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


The right side of the association.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the association when the user assigns a wrong answer, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### SkillLevel


The skill level of a user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The value of the skill level.
levels are between 0 and 100.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>log</strong></td>
<td valign="top">[<a href="#skilllevellogitem">SkillLevelLogItem</a>!]!</td>
<td>


A log of the changes to the skill level

</td>
</tr>
</tbody>
</table>

### SkillLevelLogItem


An item in the skill level change log.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


The date when the skill level changed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>difference</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The difference between the previous and the new skill level.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>oldValue</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The old skill level.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>newValue</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The new skill level.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>associatedContentIds</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


The ids of the contents that are associated with the change.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>associatedContents</strong></td>
<td valign="top">[<a href="#content">Content</a>]!</td>
<td></td>
</tr>
</tbody>
</table>

### SkillLevels


The four skill level of a user.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>remember</strong></td>
<td valign="top"><a href="#skilllevel">SkillLevel</a>!</td>
<td>


remember represents how much user remember the concept

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>understand</strong></td>
<td valign="top"><a href="#skilllevel">SkillLevel</a>!</td>
<td>


understand represents how well the user understands learned content.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>apply</strong></td>
<td valign="top"><a href="#skilllevel">SkillLevel</a>!</td>
<td>


apply represents the how well user applies the learned concept during assessment.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>analyze</strong></td>
<td valign="top"><a href="#skilllevel">SkillLevel</a>!</td>
<td>


apply is how much user can evaluate information and draw conclusions

</td>
</tr>
</tbody>
</table>

### Stage


Representation of a Stage

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of the Stage Object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Position of the Stage within the Section

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requiredContents</strong></td>
<td valign="top">[<a href="#content">Content</a>!]!</td>
<td>


List of Content that is labeled as required content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requiredContentsProgress</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


Percentage of User Progress made to required Content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optionalContents</strong></td>
<td valign="top">[<a href="#content">Content</a>!]!</td>
<td>


List of Content that is labeled as optional content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optionalContentsProgress</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


Percentage of Progress made to optional Content

</td>
</tr>
</tbody>
</table>

### Suggestion


Represents a suggestion for a user to learn new content or review old content.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#content">Content</a>!</td>
<td>


The content that is suggested to the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#suggestiontype">SuggestionType</a>!</td>
<td>


The type of suggestion.

</td>
</tr>
</tbody>
</table>

### UserInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>courseMemberships</strong></td>
<td valign="top">[<a href="#coursemembership">CourseMembership</a>!]!</td>
<td>

The course memberships of the user.

</td>
</tr>
</tbody>
</table>

### UserProgressData


Represents a user's progress on a content item.
See https://gits-enpro.readthedocs.io/en/latest/dev-manuals/gamification/userProgress.html

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


The user's id.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


The id of the content item.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>log</strong></td>
<td valign="top">[<a href="#progresslogitem">ProgressLogItem</a>]!</td>
<td>


A list of entries each representing the user completing the content item.
Sorted by date in descending order.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>learningInterval</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


The learning interval in days for the content item.
If null, the content item is not scheduled for learning.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nextLearnDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


The next time the content should be learned.
Calculated using the date the user completed the content item and the learning interval.
This is null if the user has not completed the content item once.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastLearnDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


The last time the content was learned successfully.
This is null if the user has not completed the content item once.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isLearned</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


True if the user has completed the content item at least once successfully.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDueForReview</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


True if the assessment is due for review.

</td>
</tr>
</tbody>
</table>

## Inputs

### AssessmentMetadataInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>skillPoints</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of skill points a student receives for completing this content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>skillTypes</strong></td>
<td valign="top">[<a href="#skilltype">SkillType</a>!]!</td>
<td>


Type of the assessment

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>initialLearningInterval</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


The initial learning interval for the assessment in days.
This is the interval that is applied after the assessment is completed the first time.
Following intervals are calculated based on the previous interval and the user's performance.
If this is null, the assessment will never be scheduled for review, which
is useful for assessments that are not meant to be repeated.

</td>
</tr>
</tbody>
</table>

### AssociationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>left</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Text of the left side of the association, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>right</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Text of the right side of the association, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the association when the user selects a wrong answer, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### ChapterFilter

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#intfilter">IntFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedStartDate</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedEndDate</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>and</strong></td>
<td valign="top">[<a href="#chapterfilter">ChapterFilter</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>or</strong></td>
<td valign="top">[<a href="#chapterfilter">ChapterFilter</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#chapterfilter">ChapterFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### ClozeElementInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#clozeelementtype">ClozeElementType</a>!</td>
<td>


Type of the element.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Text of the element. Only used for TEXT type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAnswer</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>


The correct answer for the blank. Only used for BLANK type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the blank when the user selects a wrong answer, in SlateJS JSON format. Only used for BLANK type.

</td>
</tr>
</tbody>
</table>

### CourseFilter


Input type for filtering courses. All fields are optional.
If multiple filters are specified, they are combined with AND (except for the or field).

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#stringfilter">StringFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetimefilter">DateTimeFilter</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>published</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>and</strong></td>
<td valign="top">[<a href="#coursefilter">CourseFilter</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>or</strong></td>
<td valign="top">[<a href="#coursefilter">CourseFilter</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>not</strong></td>
<td valign="top"><a href="#coursefilter">CourseFilter</a></td>
<td></td>
</tr>
</tbody>
</table>

### CourseMembershipInput


Represents a course membership input object of a user.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Id of the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>courseId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Id of the course the user is a member of.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="#userroleincourse">UserRoleInCourse</a>!</td>
<td>


The role of the user in the course.

</td>
</tr>
</tbody>
</table>

### CreateAssessmentInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#createcontentmetadatainput">CreateContentMetadataInput</a>!</td>
<td>


Metadata for the new Content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assessmentMetadata</strong></td>
<td valign="top"><a href="#assessmentmetadatainput">AssessmentMetadataInput</a>!</td>
<td>


Assessment metadata

</td>
</tr>
</tbody>
</table>

### CreateAssociationQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


Number of the question, used for ordering.
This can be omitted, in which case a number, one higher than the highest number of the existing questions, will be used.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAssociations</strong></td>
<td valign="top">[<a href="#associationinput">AssociationInput</a>!]!</td>
<td>


List of associations.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### CreateChapterInput


Input type for creating chapters.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Title of the chapter, maximum length is 255 characters, must not be blank.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Description of the chapter, maximum length is 3000 characters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the chapter, determines the order of the chapters, must be positive.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


Start date of the chapter, ISO 8601 format.
Must be before the end date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


End date of the chapter, ISO 8601 format.
Must be after the start date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedStartDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


Suggested Start date to start the chapter, ISO 8601 format.
Must be after Start Date and before the End dates.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedEndDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


Suggested End date of the chapter, ISO 8601 format.
Must be after the Start Dates and before the End dates.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>courseId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the course the chapter belongs to.
Must be a UUID of an existing course.

</td>
</tr>
</tbody>
</table>

### CreateClozeQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


Number of the question, used for ordering.
This can be omitted, in which case a number, one higher than the highest number of the existing questions, will be used.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>clozeElements</strong></td>
<td valign="top">[<a href="#clozeelementinput">ClozeElementInput</a>!]!</td>
<td>


List of cloze elements.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>additionalWrongAnswers</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


List of additional wrong answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>showBlanksList</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


If true, the list of possible answers will be shown to the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### CreateContentMetadataInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Name of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#contenttype">ContentType</a>!</td>
<td>


Type of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


Suggested date when the content should be done

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rewardPoints</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of reward points a student receives for completing this content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chapterId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the chapter this content is associated with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tagNames</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


TagNames this content is tagged with

</td>
</tr>
</tbody>
</table>

### CreateCourseInput


Input type for creating a new course. See also on the course type for detailed field descriptions.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Title of the course, max 255 characters, must not be blank.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Description of the course, max 3000 characters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


Start date of the course, ISO 8601 format.
Must be before the end date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


End date of the course, ISO 8601 format.
Must be after the start date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>published</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Published status of the course.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startYear</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


The year in which the term starts.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>yearDivision</strong></td>
<td valign="top"><a href="#yeardivision">YearDivision</a></td>
<td>


The division of the academic calendar in which the term takes place.

</td>
</tr>
</tbody>
</table>

### CreateExactAnswerQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


Number of the question, used for ordering.
This can be omitted, in which case a number, one higher than the highest number of the existing questions, will be used.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caseSensitive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


If the answer is case sensitive. If true, the answer is checked case sensitive.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAnswers</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


A list of possible correct answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the question when the user enters a wrong answer, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### CreateFlashcardInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sides</strong></td>
<td valign="top">[<a href="#flashcardsideinput">FlashcardSideInput</a>!]!</td>
<td>


List of sides of this flashcard. Must be at least two sides.

</td>
</tr>
</tbody>
</table>

### CreateFlashcardSetInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>flashcards</strong></td>
<td valign="top">[<a href="#createflashcardinput">CreateFlashcardInput</a>!]!</td>
<td>


List of flashcards in this set.

</td>
</tr>
</tbody>
</table>

### CreateMediaContentInput


Input for creating new media content. Media specific fields are stored in the Media Service.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#createcontentmetadatainput">CreateContentMetadataInput</a>!</td>
<td>


Metadata for the new Content

</td>
</tr>
</tbody>
</table>

### CreateMediaRecordInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Name of the media record. Cannot be blank, maximum length 255 characters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#mediatype">MediaType</a>!</td>
<td>


Type of the media record.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentIds</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


IDs of the MediaContents this media record is associated with

</td>
</tr>
</tbody>
</table>

### CreateMultipleChoiceQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


Number of the question, used for ordering.
This can be omitted, in which case a number, one higher than the highest number of the existing questions, will be used.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>answers</strong></td>
<td valign="top">[<a href="#multiplechoiceanswerinput">MultipleChoiceAnswerInput</a>!]!</td>
<td>


List of answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### CreateNumericQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


Number of the question, used for ordering.
This can be omitted, in which case a number, one higher than the highest number of the existing questions, will be used.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAnswer</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The correct answer for the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tolerance</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The allowed deviation from the correct answer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the question when the user enters a wrong answer, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### CreateQuizInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>requiredCorrectAnswers</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


    Threshold of the quiz, i.e., how many questions the user has to answer correctly to pass the quiz.

    If this is greater than the number of questions, the behavior is the same
    as if it was equal to the number of questions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>questionPoolingMode</strong></td>
<td valign="top"><a href="#questionpoolingmode">QuestionPoolingMode</a>!</td>
<td>


Question pooling mode of the quiz.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberOfRandomlySelectedQuestions</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


    Number of questions that are randomly selected from the list of questions.
    Should only be set if questionPoolingMode is RANDOM.

    If this is greater than the number of questions, the behavior is the same
    as if it was equal to the number of questions.

    If this is null or not set, the behavior is the same as if it was equal to the number of questions.

</td>
</tr>
</tbody>
</table>

### CreateSectionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>chapterId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Chapter Section will belong to

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


name given to Section

</td>
</tr>
</tbody>
</table>

### CreateSelfAssessmentQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


Number of the question, used for ordering.
This can be omitted, in which case a number, one higher than the highest number of the existing questions, will be used.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>solutionSuggestion</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


A possible correct answer to the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### CreateStageInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>requiredContents</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


updated List of UUIDs for content labeled as required in this Stage

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optionalContents</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


updated List of UUIDs for content labeled as optional in this Stage

</td>
</tr>
</tbody>
</table>

### DateTimeFilter


Filter for date values.
If multiple filters are specified, they are combined with AND.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>after</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


If specified, filters for dates after the specified value.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>before</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


If specified, filters for dates before the specified value.

</td>
</tr>
</tbody>
</table>

### FlashcardSideInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of this flashcard side.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Label of this flashcard side. E.g. "Front" or "Back", or "Question" or "Answer".

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isQuestion</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether this side is a question, i.e. should be shown to the user to guess the other sides or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAnswer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether this side is also an answer. Some Flashcards can have their sides be used as both questions or answers for the other sides

</td>
</tr>
</tbody>
</table>

### IntFilter


Filter for integer values.
If multiple filters are specified, they are combined with AND.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


An integer value to match exactly.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>greaterThan</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


If specified, filters for values greater than to the specified value.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lessThan</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>


If specified, filters for values less than to the specified value.

</td>
</tr>
</tbody>
</table>

### LogFlashcardLearnedInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>flashcardId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


The id of the flashcard that was learned.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>successful</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


If the user knew the flashcard or not.

</td>
</tr>
</tbody>
</table>

### LogFlashcardSetLearnedInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>flashcardSetId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


The id of the flashcard that was learned.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


The id of the user that learned the flashcard.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>percentageSuccess</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The percentage of flashcards in the set that the user knew.

</td>
</tr>
</tbody>
</table>

### MultipleChoiceAnswerInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>answerText</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the answer, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correct</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


Whether the answer is correct or not.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for when the user selects this answer, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### Pagination


Specifies the page size and page number for paginated results.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The page number, starting at 0.
If not specified, the default value is 0.
For values greater than 0, the page size must be specified.
If this value is larger than the number of pages, an empty page is returned.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>size</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


The number of elements per page.

</td>
</tr>
</tbody>
</table>

### QuestionCompletedInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>questionId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correct</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


true when question was answered correctly

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>usedHint</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


true when a hint was used for the question

</td>
</tr>
</tbody>
</table>

### QuizCompletedInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>quizId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the quiz.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>completedQuestions</strong></td>
<td valign="top">[<a href="#questioncompletedinput">QuestionCompletedInput</a>!]!</td>
<td>


List of questions that were answered in the quiz.

</td>
</tr>
</tbody>
</table>

### ResourceMarkdownInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


The raw ResourceMarkdown text.

</td>
</tr>
</tbody>
</table>

### StringFilter


Filter for string values.
If multiple filters are specified, they are combined with AND.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>equals</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>


A string value to match exactly.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contains</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>


A string value that must be contained in the field that is being filtered.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ignoreCase</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


If true, the filter is case-insensitive.

</td>
</tr>
</tbody>
</table>

### UpdateAssessmentInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#updatecontentmetadatainput">UpdateContentMetadataInput</a>!</td>
<td>


Metadata for the new Content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>assessmentMetadata</strong></td>
<td valign="top"><a href="#assessmentmetadatainput">AssessmentMetadataInput</a>!</td>
<td>


Assessment metadata

</td>
</tr>
</tbody>
</table>

### UpdateAssociationQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the question to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAssociations</strong></td>
<td valign="top">[<a href="#associationinput">AssociationInput</a>!]!</td>
<td>


List of associations.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### UpdateChapterInput


Input type for updating chapters.
The ID field specifies which chapter should be updated, all other fields specify the new values.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the chapter that should be updated.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Title of the chapter, maximum length is 255 characters, must not be blank.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Description of the chapter, maximum length is 3000 characters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the chapter, determines the order of the chapters, must be positive.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


Start date of the chapter, ISO 8601 format.
Must be before the end date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


End date of the chapter, ISO 8601 format.
Must be after the start date.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedStartDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


Suggested Start date to start the chapter, ISO 8601 format.
Must be after Start Date and before the End dates.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedEndDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>


Suggested End date of the chapter, ISO 8601 format.
Must be after the Start Dates and before the End dates.

</td>
</tr>
</tbody>
</table>

### UpdateClozeQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the question to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>clozeElements</strong></td>
<td valign="top">[<a href="#clozeelementinput">ClozeElementInput</a>!]!</td>
<td>


List of cloze elements.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>additionalWrongAnswers</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


List of additional wrong answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>showBlanksList</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


If true, the list of possible answers will be shown to the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### UpdateContentMetadataInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


Name of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>suggestedDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


Date when the content should be done

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rewardPoints</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of reward points a student receives for completing this content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>chapterId</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the chapter this content is associated with

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tagNames</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


TagNames this content is tagged with

</td>
</tr>
</tbody>
</table>

### UpdateCourseInput


Input type for updating an existing course. See also on the course type for detailed field descriptions.
The id specifies the course that should be updated, the other fields specify the new values.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the course that should be updated.
Must be an id of an existing course, otherwise an error is returned.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


The new title of the course, max 255 characters, must not be blank.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


The new description of the course, max 3000 characters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


The new start date of the course, ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>


The new end date of the course, ISO 8601 format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>published</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


The new published status of the course.

</td>
</tr>
</tbody>
</table>

### UpdateExactAnswerQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the question to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAnswers</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>


A list of possible correct answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caseSensitive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>


If the answer is case sensitive. If true, the answer is checked case sensitive.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the question when the user enters a wrong answer, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### UpdateFlashcardInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Id of the flashcard to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sides</strong></td>
<td valign="top">[<a href="#flashcardsideinput">FlashcardSideInput</a>!]!</td>
<td>


List of sides of this flashcard. Must be at least two sides.

</td>
</tr>
</tbody>
</table>

### UpdateMediaContentInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#updatecontentmetadatainput">UpdateContentMetadataInput</a>!</td>
<td>


Metadata for the new Content

</td>
</tr>
</tbody>
</table>

### UpdateMediaRecordInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the media record which should be updated

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>


New name of the media record. Cannot be blank, maximum length 255 characters.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#mediatype">MediaType</a>!</td>
<td>


New type of the media record.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contentIds</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


IDs of the MediaContents this media record is associated with

</td>
</tr>
</tbody>
</table>

### UpdateMultipleChoiceQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the question to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>answers</strong></td>
<td valign="top">[<a href="#multiplechoiceanswerinput">MultipleChoiceAnswerInput</a>!]!</td>
<td>


List of answers.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### UpdateNumericQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the question to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>correctAnswer</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The correct answer for the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tolerance</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>


The allowed deviation from the correct answer.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>feedback</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Feedback for the question when the user enters a wrong answer, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### UpdateSelfAssessmentQuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


UUID of the question to update.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


Text of the question, in SlateJS JSON format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>solutionSuggestion</strong></td>
<td valign="top"><a href="#json">JSON</a>!</td>
<td>


A possible correct answer to the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

### UpdateStageInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Identifier of the Stage

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>requiredContents</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


updated List of UUIDs for content labeled as required in this Stage

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>optionalContents</strong></td>
<td valign="top">[<a href="#uuid">UUID</a>!]!</td>
<td>


updated List of UUIDs for content labeled as optional in this Stage

</td>
</tr>
</tbody>
</table>

## Enums

### ClozeElementType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>TEXT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>BLANK</strong></td>
<td></td>
</tr>
</tbody>
</table>

### ContentType


Type of the content

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MEDIA</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FLASHCARDS</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>QUIZ</strong></td>
<td></td>
</tr>
</tbody>
</table>

### MediaType


The type of the media record

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>VIDEO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>AUDIO</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>IMAGE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>PRESENTATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DOCUMENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>URL</strong></td>
<td></td>
</tr>
</tbody>
</table>

### QuestionPoolingMode

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>RANDOM</strong></td>
<td>


Questions are randomly selected from the list of questions.

</td>
</tr>
<tr>
<td valign="top"><strong>ORDERED</strong></td>
<td>


Questions are selected in order from the list of questions.

</td>
</tr>
</tbody>
</table>

### QuestionType


The type of a question.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MULTIPLE_CHOICE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>CLOZE</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ASSOCIATION</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>EXACT_ANSWER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>NUMERIC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SELF_ASSESSMENT</strong></td>
<td></td>
</tr>
</tbody>
</table>

### RewardChangeReason


The reason why the reward score has changed.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>CONTENT_DONE</strong></td>
<td>


The user has completed a content for the first time.
The associated contents are the content that were completed.

</td>
</tr>
<tr>
<td valign="top"><strong>CONTENT_REVIEWED</strong></td>
<td>


The user has reviewed a content.
The associated contents are the content that were reviewed.

</td>
</tr>
<tr>
<td valign="top"><strong>CONTENT_DUE_FOR_LEARNING</strong></td>
<td>


There exists a content that is due for learning.
The associated contents are the content that are due for learning.

</td>
</tr>
<tr>
<td valign="top"><strong>CONTENT_DUE_FOR_REPETITION</strong></td>
<td>


There exists a content that is due for repetition.
The associated contents are the content that are due for repetition.

</td>
</tr>
<tr>
<td valign="top"><strong>COMPOSITE_VALUE</strong></td>
<td>


The score changed because the underlying scores changed.
Relevant for the power score.

</td>
</tr>
</tbody>
</table>

### SkillType


Type of the assessment

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>REMEMBER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>UNDERSTAND</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>APPLY</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ANALYSE</strong></td>
<td></td>
</tr>
</tbody>
</table>

### SortDirection


Specifies the sort direction, either ascending or descending.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ASC</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>DESC</strong></td>
<td></td>
</tr>
</tbody>
</table>

### SuggestionType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>NEW_CONTENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>REPETITION</strong></td>
<td></td>
</tr>
</tbody>
</table>

### UserRoleInCourse


Enum containing all valid roles a user can have in a course.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>STUDENT</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>TUTOR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>ADMINISTRATOR</strong></td>
<td></td>
</tr>
</tbody>
</table>

### YearDivision


The division of the academic year.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>FIRST_SEMESTER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SECOND_SEMESTER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FIRST_TRIMESTER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SECOND_TRIMESTER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>THIRD_TRIMESTER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FIRST_QUARTER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>SECOND_QUARTER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>THIRD_QUARTER</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>FOURTH_QUARTER</strong></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Date

An RFC-3339 compliant Full Date Scalar

### DateTime

A slightly refined version of RFC-3339 compliant DateTime Scalar

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### JSON

A JSON scalar

### LocalTime

24-hour clock time value string in the format `hh:mm:ss` or `hh:mm:ss.sss`.

### ResolveToSourceArgs

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### Time

An RFC-3339 compliant Full Time Scalar

### UUID

A universally unique identifier compliant UUID Scalar

### Url

A Url scalar


## Interfaces


### Assessment

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>assessmentMetadata</strong></td>
<td valign="top"><a href="#assessmentmetadata">AssessmentMetadata</a>!</td>
<td>


Assessment metadata

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#contentmetadata">ContentMetadata</a>!</td>
<td>


Metadata of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userProgressData</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the content for the current user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progressDataForUser</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the specified user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Content

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


ID of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#contentmetadata">ContentMetadata</a>!</td>
<td>


Metadata of the content

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userProgressData</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the content for the current user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progressDataForUser</strong></td>
<td valign="top"><a href="#userprogressdata">UserProgressData</a>!</td>
<td>


Progress data of the specified user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userId</td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Question


Generic question interface.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#uuid">UUID</a>!</td>
<td>


Unique identifier of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>


Number of the question, i.e., the position of the question in the list of questions.
Only relevant if questionPoolingMode is ORDERED.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#questiontype">QuestionType</a>!</td>
<td>


Type of the question.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hint</strong></td>
<td valign="top"><a href="#json">JSON</a></td>
<td>


Optional hint for the question, in SlateJS JSON format.

</td>
</tr>
</tbody>
</table>

## Unions

### ClozeElement

<table>
<thead>
<th align="left">Type</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong><a href="#clozetextelement">ClozeTextElement</a></strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong><a href="#clozeblankelement">ClozeBlankElement</a></strong></td>
<td></td>
</tr>
</tbody>
</table>
