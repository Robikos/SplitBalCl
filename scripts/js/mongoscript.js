// use yeast6;
// db.yeast6_train_smote_borderline1.renameCollection("yeast6_smote_borderline1_train");
// db.yeast6_train_smote_borderline2.renameCollection("yeast6_smote_borderline2_train");
// db.yeast6_train_smote_svm.renameCollection("yeast6_smote_svm_train");

// use segment0;
// db.segment0_train_smote_regular.renameCollection("segment0_smote_regular_train");
// db.segment0_train_smote_borderline1.renameCollection("segment0_smote_borderline1_train");
// db.segment0_train_smote_borderline2.renameCollection("segment0_smote_borderline2_train");
// db.segment0_train_smote_svm.renameCollection("segment0_smote_svm_train");

// use pageblocks;
// db.pageblocks_train_smote_regular.renameCollection("pageblocks_smote_regular_train");
// db.pageblocks_train_smote_borderline1.renameCollection("pageblocks_smote_borderline1_train");
// db.pageblocks_train_smote_borderline2.renameCollection("pageblocks_smote_borderline2_train");
// db.pageblocks_train_smote_svm.renameCollection("pageblocks_smote_svm_train");

// use magic61;
// db.magic61_train_smote_regular.renameCollection("magic61_smote_regular_train");
// db.magic61_train_smote_borderline1.renameCollection("magic61_smote_borderline1_train");
// db.magic61_train_smote_borderline2.renameCollection("magic61_smote_borderline2_train");
// db.magic61_train_smote_svm.renameCollection("magic61_smote_svm_train");

// use churn6;
// db.churn6_train_smote_regular.renameCollection("churn6_smote_regular_train");
// db.churn6_train_smote_borderline1.renameCollection("churn6_smote_borderline1_train");
// db.churn6_train_smote_borderline2.renameCollection("churn6_smote_borderline2_train");
// db.churn6_train_smote_svm.renameCollection("churn6_smote_svm_train");

// use bank75;
// db.bank75_train_smote_regular.renameCollection("bank75_smote_regular_train");
// db.bank75_train_smote_borderline1.renameCollection("bank75_smote_borderline1_train");
// db.bank75_train_smote_borderline2.renameCollection("bank75_smote_borderline2_train");
// db.bank75_train_smote_svm.renameCollection("bank75_smote_svm_train");

// use abalone19;
// db.abalone19_train_smote_regular.renameCollection("abalone19_smote_regular_train");
// db.abalone19_train_smote_borderline1.renameCollection("abalone19_smote_borderline1_train");
// db.abalone19_train_smote_borderline2.renameCollection("abalone19_smote_borderline2_train");
// db.abalone19_train_smote_svm.renameCollection("abalone19_smote_svm_train");

// use yeast6;
// db.yeast6_test.copyTo("yeast6_smote_regular_test");
// db.yeast6_test.copyTo("yeast6_smote_borderline1_test");
// db.yeast6_test.copyTo("yeast6_smote_borderline2_test");
// db.yeast6_test.copyTo("yeast6_smote_svm_test");

// use segment0;
// db.segment0_test.copyTo("segment0_smote_regular_test");
// db.segment0_test.copyTo("segment0_smote_borderline1_test");
// db.segment0_test.copyTo("segment0_smote_borderline2_test");
// db.segment0_test.copyTo("segment0_smote_svm_test");

// use pageblocks;
// db.pageblocks_test.copyTo("pageblocks_smote_regular_test");
// db.pageblocks_test.copyTo("pageblocks_smote_borderline1_test");
// db.pageblocks_test.copyTo("pageblocks_smote_borderline2_test");
// db.pageblocks_test.copyTo("pageblocks_smote_svm_test");

// use magic61;
// db.magic61_test.copyTo("magic61_smote_regular_test");
// db.magic61_test.copyTo("magic61_smote_borderline1_test");
// db.magic61_test.copyTo("magic61_smote_borderline2_test");
// db.magic61_test.copyTo("magic61_smote_svm_test");

// use churn6;
// db.churn6_test.copyTo("churn6_smote_regular_test");
// db.churn6_test.copyTo("churn6_smote_borderline1_test");
// db.churn6_test.copyTo("churn6_smote_borderline2_test");
// db.churn6_test.copyTo("churn6_smote_svm_test");

// use bank75;
// db.bank75_test.copyTo("bank75_smote_regular_test");
// db.bank75_test.copyTo("bank75_smote_borderline1_test");
// db.bank75_test.copyTo("bank75_smote_borderline2_test");
// db.bank75_test.copyTo("bank75_smote_svm_test");

// use abalone19;
// db.abalone19_test.copyTo("abalone19_smote_regular_test");
// db.abalone19_test.copyTo("abalone19_smote_borderline1_test");
// db.abalone19_test.copyTo("abalone19_smote_borderline2_test");
// db.abalone19_test.copyTo("abalone19_smote_svm_test");

use yeast6;
db.yeast6_test.copyTo("yeast6_correlation_test");
use segment0;
db.segment0_test.copyTo("segment0_correlation_test");
use pageblocks;
db.pageblocks_test.copyTo("pageblocks_correlation_test");
use magic61;
db.magic61_test.copyTo("magic61_correlation_test");
use churn6;
db.churn6_test.copyTo("churn6_correlation_test");
use bank75;
db.bank75_test.copyTo("bank75_correlation_test");
use abalone19;
db.abalone19_test.copyTo("abalone19_correlation_test");



