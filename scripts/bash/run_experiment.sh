# name of db -> $1
# name of collection -> $2
# number of splitbal bins -> $3

run_experiment() {
  echo "generate train and test"
  Rscript ./scripts/R/generate_db.R $1 $2

  echo "generate result bins"
  for i in {1..$3}
  do
    Rscript ./scripts/R/splitbal_binary.R $1 $2 $i
  done

  echo "ensemble bins"
  for i in {1..$($3 / 2)..2}
  do
    Rscript ./scripts/R/ensemble.R $1 $2 $i $($i + 1) max
  done

  echo "count AUC"

  Rscript ./scripts/R/auc.R $1 $2 result_1
  Rscript ./scripts/R/auc.R $1 $2 ens_1
}

echo "Normal experiment - $1 $2"
run_experiment $1 $2

# echo "Correlation test - $1 $2"
# ruby ./scripts/ruby/correlation_sorter.rb $1 $2
# db_collection = "$2_correlation"
# run_experiment $1 db_collection

# echo "SMOTE regular test"
# python .scripts/python/smote_generator.py $1 $2 regular
# db_collection = "$2_smote_regular"
# run_experiment $1 db_collection

# echo "SMOTE borderline1 test"
# python .scripts/python/smote_generator.py $1 $2 borderline1
# db_collection = "$2_smote_regular"
# run_experiment $1 db_collection

# echo "SMOTE borderline2 test"
# python .scripts/python/smote_generator.py $1 $2 borderline2
# db_collection = "$2_smote_regular"
# run_experiment $1 db_collection

# echo "SMOTE svm test"
# python .scripts/python/smote_generator.py $1 $2 svm
# db_collection = "$2_smote_regular"
# run_experiment $1 db_collection
