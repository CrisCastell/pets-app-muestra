from rest_framework import serializers
from .models import Account
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from pets.utils import errorResponse
from rest_framework.authtoken.models import Token

class RegistrationSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=Account.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    username = serializers.CharField(
            required=True,
            validators=[UniqueValidator(queryset=Account.objects.all())]
            )
    password2 = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = Account
        fields = ['email', 'username', 'password', 'password2']

        extra_kwarg = {
            'password': {'write_only': True}
        }
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            errorResponse['error']['detail'] = "Password fields didn't match."
            errorResponse['error']['code'] = "errorPassword"
            raise serializers.ValidationError(errorResponse)
            # raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = Account.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )

        token, created = Token.objects.get_or_create(user=user)

        
        user.set_password(validated_data['password'])
        user.save()

        

        return user
    
    


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['username','first_name', 'last_name', 'email', 'date_of_birth']


    def validate_email(self, value):
        user = self.context['request'].user
        if Account.objects.exclude(pk=user.pk).filter(email=value).exists():

            errorResponse['error']['detail'] = "This email is already in use."
            errorResponse['error']['code'] = "errorEmail"
            raise serializers.ValidationError(errorResponse)
            # raise serializers.ValidationError({"email": "This email is already in use."})
        return value

    def validate_username(self, value):
        user = self.context['request'].user

        if Account.objects.exclude(pk=user.pk).filter(username=value).exists():

            errorResponse['error']['detail'] = "This username is already in use."
            errorResponse['error']['code'] = "errorUsername"
            raise serializers.ValidationError(errorResponse)

            # raise serializers.ValidationError({"username": "This username is already in use."})
            
        return value

    def update(self, instance, validated_data):

        user = self.context['request'].user

        if user.pk != instance.pk:

            errorResponse['error']['detail'] = "You dont have permission for this user."
            errorResponse['error']['code'] = "errorAuthorization"
            raise serializers.ValidationError(errorResponse)


            # raise serializers.ValidationError({"authorize": "You dont have permission for this user."})

        instance.first_name = validated_data['first_name']
        instance.last_name = validated_data['last_name']
        instance.email = validated_data['email']
        instance.username = validated_data['username']
        instance.date_of_birth = validated_data['date_of_birth']

        instance.save()

        return instance


class AccountImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['profile_image']
        
class AccountBasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['username', 'profile_image']


class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Account
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:

            errorResponse['error']['detail'] = "Password fields didn't match."
            errorResponse['error']['code'] = "errorPassword"
            raise serializers.ValidationError(errorResponse)


            # raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            errorResponse['detail'] = "Old password is not correct"
            errorResponse['code'] = "errorOldPassword"
            raise serializers.ValidationError(errorResponse)
            # raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):

        user = self.context['request'].user

        if user.pk != instance.pk:

            errorResponse['error']['detail'] = "You dont have permission for this user."
            errorResponse['error']['code'] = "errorAuthorization"
            raise serializers.ValidationError(errorResponse)

            # raise serializers.ValidationError({"authorize": "You dont have permission for this user."})

        instance.set_password(validated_data['password'])
        instance.save()

        return instance