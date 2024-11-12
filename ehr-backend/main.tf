provider "aws" {
  access_key = ""
  secret_key = ""
  region = ""
}

resource "aws_instance" "ehr_project" {
  ami             = "ami-xxxxxx"  # Amazon Linux 2 AMI ID
  instance_type   = "t2.micro"  # Free tier eligible instance type
  key_name        = "my-key-pair"  # Name of your key pair
  subnet_id       = "subnet-xxxxxx"  # Replace with your subnet ID
  security_groups = ["sg-xxxxxxx"]  # Replace with your security group ID

  tags = {
    Name = "project_LI"
  }
}