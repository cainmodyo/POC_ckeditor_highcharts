class Mail < ActiveRecord::Base
  attr_accessible :body, :subject, :to
end
