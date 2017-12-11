mongoimport --db yeast6 --collection yeast6 --type csv --hdearline --file datasets/

csvnames = Dir["./datasets/final/*.csv"].map { |x| x.split("/").last[0..-5] }

csvnames.each do |name|
  system "mongoimport --db #{name} --collection #{name} --type csv --headerline --file datasets/final/#{name}.csv"
end

csvnames.each do |name|
  system "Rscript scripts/R/generate_db.R #{name} #{name}"
end

csvnames.each do |name|
  system "ruby scripts/ruby/correlation_sorter.rb #{name} #{name}"
end

# csvnames.each do |name|
#   system "mongo #{name} --eval 'db.#{name}_test.copyTo('#{name}_correlation_test');'"
# end

csvnames.each do |name|
  %w(regular borderline1 borderline2 svm).each do |kind|
    system "python scripts/python/smote_generator.py #{name} #{name}_train #{kind}"
  end
end

# normal one

csvnames_with_bins = csvnames.zip([129, 75, 6, 61, 8, 6, 41])

csvnames_with_bins.each do |res|
  name = res[0]
  number = res[1]

  (1..number).each do |num|
    system "Rscript scripts/R/splitbal_binary.R #{name} #{name} #{num}"
  end
end

csvnames_with_bins.each do |res|
  name = res[0]
  number = res[1]

  (2..number).each do |num|
    system "Rscript scripts/R/ensemble.R #{name} #{name} 1 #{num} max"
  end
end

csvnames.each do |name|
  system "Rscript scripts/R/auc.R #{name} #{name} ens_1"
end

#correlation

csvnames_with_bins.each do |res|
  name = res[0]
  number = res[1]

  (1..number).each do |num|
    system "Rscript scripts/R/splitbal_binary.R #{name} #{name}_correlation #{num}"
  end
end

csvnames_with_bins.each do |res|
  name = res[0]
  number = res[1]

  (2..number).each do |num|
    system "Rscript scripts/R/ensemble.R #{name} #{name}_correlation 1 #{num} max"
  end
end

csvnames.each do |name|
  system "Rscript scripts/R/auc.R #{name} #{name}_correlation ens_1"
end


# SMOTE

%w(regular borderline1 borderline2 svm).each do |kind|
  csvnames.each do |name|
    system "Rscript scripts/R/splitbal_binary.R #{name} #{name}_smote_#{kind} 1"
    system "Rscript scripts/R/auc.R #{name} #{name}_smote_#{kind} result_1"
  end
end








