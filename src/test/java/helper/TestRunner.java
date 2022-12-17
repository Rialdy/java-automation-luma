package helper;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"/Users/rialdyperdana/Documents/Iseng/luma-test-automation/src/test/resources/features"},
        tags = {"@purchase"},
        glue = "",
        plugin = {"pretty","json:target/cucumber.json","html:target/report"})

public class TestRunner {
}
